/* */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import "../App.css";
import "../styles/admin.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProgress, setSelectedProgress] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [source1, source2, source3] = await Promise.all([
          axios.get(
            "https://bakkers-driving-school.onrender.com/api/profilesforadmindashboard"
          ),
          axios.get(
            "https://bakkers-driving-school.onrender.com/api/get-user-scores-admin"
          ),
          axios.get(
            "https://bakkers-driving-school.onrender.com/api/get-tokens"
          ),
        ]);

        const merged = [];

        // Assuming source1.data is an array of profiles
        source1.data.profiles.forEach((profile) => {
          const score = source2.data.scores.find(
            (s) => s.userId === profile._id
          );
          const token = source3.data.tokens.find(
            (t) => t.userId === profile._id
          );

          if (score && token) {
            merged.push({
              ...profile,
              progress: score,
              time: token.updatedAt.toString(),
            });
          }
        });

        setData(merged);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // console.log(data?.source1 | "source one is not available");
  const handleViewProgress = (progress) => {
    setSelectedProgress(progress);
    setShowModal(true);
  };

  const handlePrint = (item) => {
    const { firstname, lastname, dateofbirth } = item;
    const printContent = window.open("", "_blank");
    printContent.document.write(`
    <html>
      <head>
        <title>Print</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
        <style>
        @page {
          size: A4;
          margin: 0;
        }
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
        }
        .container {
          margin-top: 200px; /* Adjust as needed */
          margin: auto
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px; /* Add spacing between tables */
        }
        td:nth-child(2){
          padding: 8px;
          text-align: left;
        }
        .row:after {
          content: "";
          display: table;
          clear: both;
        }
        .col-8, .col-4 {
          float: left;
        }
        .rows{
          padding:8px;
        }
      </style>
      </head>
      <body>
        <div class="container mt-5">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div>
            <table>
              <tr class="row">
                <td class="col-8">${firstname} ${lastname}</td>
                <td class="col-4">${dateofbirth || "18:01:1999"}</td>
              </tr>
              <tr class="row rows">
                <td class="col-12">${(function () {
                  const now = new Date(Date.now());
                  const date = now.getDate();
                  const month = now.getMonth() + 1;
                  const year = now.getFullYear();
                  return `${month}/${date}/${year}`;
                })()}</td>
              </tr>
              <tr class="row">
                <td class="col-8">Bakkers Driving School</td>
                <td class="col-4">E3246</td>
              </tr>
              <tr class="row">
                <td class="col-8">11315 Rancho Bernado Road, ST \n San Diego, CA 92127</td>
                <td class="col-4">(858) 484-5832</td>
              </tr>
              </table>
              <table>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <tr class="row">
                <td class="col-8"></td>
                <td class="col-4">13246-127</td>
              </tr>
            </table>
          </div>
        </div>
      </body>
    </html>
  `);
    printContent.document.close();
    printContent.print();
  };

  return (
    <main>
      <h2
        className="bold"
        style={{
          margin: "20px",
          textAlign: "center",
          fontSize: "50px",
          color: "green",
        }}
      >
        Bakkers Driving School Course Instruction
      </h2>
      <h3 className="bold" style={{ textAlign: "center", fontSize: "30px" }}>
        Dashboard
      </h3>
      <table id="maintable">
        <thead>
          <tr id="table-head">
            <th className="head">First Name</th>
            <th className="head">Last Name</th>
            <th className="head">Date of Birth</th>
            <th className="head">Email</th>
            <th className="head">Number</th>
            <th className="head">Time</th>
            <th className="head">Progress</th>
            <th className="head">Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {data.map((item) => (
            <tr key={item._id}>
              <td className="body">{item.firstname}</td>
              <td className="body">{item.lastname}</td>
              <td className="body">{item.dateofbirth}</td>
              <td className="body email">{item.email}</td>
              <td className="body">
                {(function duration() {
                  const duration = item.startingtime;
                  const hours = Math.floor(
                    (duration % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60)
                  );
                  const minutes = Math.floor(
                    (duration % (1000 * 60 * 60)) / (1000 * 60)
                  );
                  const seconds = Math.floor((duration % (1000 * 60)) / 1000);
                  return ` ${hours < 10 ? "0" + hours : hours}:${" "}
                  ${minutes < 10 ? "0" + minutes : minutes}:${" "}
                  ${seconds < 10 ? "0" + seconds : seconds}`;
                })()}
              </td>
              <td className="body">{item.tokens?.updatedAt || "sime"}</td>
              <td className="body">
                <button onClick={() => handleViewProgress(item.progress)}>
                  View Progress
                </button>
              </td>
              <td className="body">
                <button
                  onClick={() => handlePrint(item)}
                  disabled={
                    Array.isArray(item.progress) &&
                    item.progress.length > 0 &&
                    item.progress[item.progress.length - 1].score < 80
                  }
                >
                  Print
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2 style={{ color: "white" }}>Progress</h2>
            {Array.isArray(selectedProgress) &&
              selectedProgress.map((item) => (
                <div key={item.chapter}>
                  {/* <p>
                    Chapter {item.chapter}: {item.score}%
                  </p> */}
                  <table>
                    <thead>
                      <tr>
                        <th>Chapter</th>
                        <th>Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.progress.map((score) => (
                        <tr key={score.userId}>
                          <td>{score.question}</td>
                          <td>{score.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            <button
              onClick={() =>
                handlePrint(
                  data.find((item) => item.progress === selectedProgress)
                )
              }
            >
              Print
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Dashboard;
