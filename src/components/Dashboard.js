import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import "../styles/admin.css";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [showProgressTable, setShowProgressTable] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

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
              time: token.updatedAt,
            });
          }
        });
        console.log(source2.data.scores);
        setData(merged);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handlePrint = (item) => {
    const { firstname, lastname, birthdate } = item;
    const printWindow = window.open("", "", "height=800,width=600");

    const printContent = `
      <html>
        <head>
          <title>Print</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
          <style>
            @media print {
              @page {
                size: A4;
                margin: 0;
              }
              body {
                font-family: Arial, sans-serif;
                font-size: 16.87px;
                margin: 20px 0 20px 70px;
              }
              .container {
                margin-top: 50px;
                margin: auto;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 20px;
              }
              td:nth-child(2) {
                padding: 8px;
                text-align: left;
              }
              .row:after {
                content: "";
                display: table;
                clear: both;
              }
              .col-8,
              .col-4 {
                float: left;
              }
              .rows {
                padding: 8px;
              }
              tr{
                margin-bottom: 10px;
              }
            }
          </style>
        </head>
        <body onload="window.print()">
          <div class=" h5 container mt-5">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
              <table>
                <tr class=" h5 row" style= "margin-top: 12px">
                  <td class=" h5 col-8">${firstname} ${lastname}</td>
                  <td class=" h5 col-4">${(function () {
                    const dob = birthdate.substring(0, 10);
                    const year = dob.substring(0, 4);
                    const month = dob.substring(5, 7);
                    const day = dob.substring(8, 10);
                    return `${month}/${day}/${year}`;
                  })()}</td>
                </tr>
                <tr class=" h5 row">
                  <td class=" h5 col-12">${(function () {
                    const now = new Date(Date.now());
                    const date = now.getDate();
                    const month = now.getMonth() + 1;
                    const year = now.getFullYear();
                    return `${month}/${date}/${year}`;
                  })()}</td>
                </tr>
                <br/>
                <tr class=" h5 row" style="margin-top:20px;">
                  <td class=" h5 col-8">Bakkers Driving School</td>
                  <td class=" h5 col-4">E3246</td>
                </tr>
                <tr class=" h5 row" style="margin-top:20px">
                  <td class=" h5 col-8">11315 Rancho Bernardo Road,#132,  \nSan Diego, CA 92127</td>
                  <td class=" h5 col-4">(858) 484-5832</td>
                </tr>
                <tr class=" h5 row"style="margin-top:12px">
                  <td class=" h5 col-8">Roderick Stansbery</td>
                  <td class=" h5 col-4">13246-127</td>
                </tr>
              </table>
              <table>
                <br/>
                <br/>
                <br />
                <br />
                <br />
                <br />
                <tr class=" h5 row">
                  <td class=" h5 col-8"></td>
                  <td class=" h5 col-4">${(function () {
                    const now = new Date(Date.now());
                    const date = now.getDate();
                    const month = now.getMonth() + 1;
                    const year = now.getFullYear();
                    return `${month}/${date}/${year}`;
                  })()}</td>
                </tr>
              </table>
            </div>
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main
      className={
        location.pathname.toLowerCase() === "/admindashboard"
          ? "admindashboard"
          : null
      }
    >
      <section id="admin-dashboard">
        <h2
          style={{
            margin: "10px",
            textAlign: "center",
            fontSize: "24px",
            color: "green",
          }}
        >
          Bakkers Driving School Course Instruction
        </h2>
        <div className="search">
          <div id="search-div">
            <input
              type="text"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          <h3 className="bold">
            {showProgressTable ? "Progress Table" : "Details Table"}
          </h3>
          <button
            onClick={() =>
              showProgressTable
                ? setShowProgressTable(false)
                : setShowProgressTable(true)
            }
            className="view-progress-button"
          >
            {showProgressTable ? "View Details" : "View Progress"}
          </button>
        </div>

        {!showProgressTable && (
          <table id="maintable">
            <thead>
              <tr id="table-head">
                <th className="head">First Name</th>
                <th className="head">Last Name</th>
                <th className="head">Date of Birth</th>
                <th className="head">Email</th>
                <th className="head">Phone</th>
                <th className="head">Duration</th>
                <th className="head">Last Login</th>
                <th className="head">Parent name</th>
                <th className="head">Parent Email</th>
                <th className="head">Parent phone</th>
                <th className="head">Actions</th>
              </tr>
            </thead>
            <tbody id="table-body">
              {filteredData.map((item) => (
                <tr key={item._id}>
                  <td className="body">{item.firstname}</td>
                  <td className="body">{item.lastname}</td>
                  <td className="body">{item.birthdate.substring(0, 10)}</td>
                  <td className="body email">{item.email}</td>
                  <td className="body">{item.ynumber}</td>
                  <td className="body">
                    {(function duration() {
                      const duration = 108000000 - item.startingtime;
                      const hours = Math.floor(
                        (duration % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60)
                      );
                      const minutes = Math.floor(
                        (duration % (1000 * 60 * 60)) / (1000 * 60)
                      );
                      const seconds = Math.floor(
                        (duration % (1000 * 60)) / 1000
                      );
                      return ` ${hours < 10 ? "0" + hours : hours}:${" "}
                  ${minutes < 10 ? "0" + minutes : minutes}:${" "}
                  ${seconds < 10 ? "0" + seconds : seconds}`;
                    })()}
                  </td>
                  <td className="body">
                    {(function () {
                      const time = item.time;
                      const pastTime = new Date(time);
                      const currentTime = new Date();
                      const difference =
                        currentTime.getTime() - pastTime.getTime();
                      const seconds = Math.floor(difference / 1000) % 60;
                      const minutes = Math.floor(difference / (1000 * 60)) % 60;
                      const hours =
                        Math.floor(difference / (1000 * 60 * 60)) % 24;
                      const days = Math.floor(
                        difference / (1000 * 60 * 60 * 24)
                      );
                      const months = Math.floor(
                        difference / (1000 * 60 * 60 * 24 * 30)
                      );
                      return `${months ? months + "m" : ""} ${
                        days ? days + "d" : ""
                      } ${hours ? hours + "h" : ""} ${
                        minutes ? minutes + "m" : ""
                      } ${seconds ? seconds + "s" : ""}`;
                    })()}
                  </td>
                  <td className="body">{item.pname}</td>
                  <td className="body email">{item.pemail}</td>
                  <td className="body">{item.pnumber}</td>

                  <td className="body">
                    <button
                      onClick={() => handlePrint(item)}
                      disabled={
                        !Object.values(item.progress)
                          .slice(2, 17)
                          .every((score) => score >= 8)
                      }
                    >
                      Print Certificate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {showProgressTable && (
          <div className="progress-container">
            {filteredData.map((item) => (
              <table className="progress-table" key={item._id}>
                <thead className="headname">
                  <h4>
                    {item.firstname} {item.lastname}
                  </h4>
                </thead>

                <thead>
                  <tr className="head-details">
                    <th>Chapter</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody className="body-details">
                  {Object.keys(item.progress)
                    .slice(2, 18)
                    .map((key) => (
                      <tr key={key} className="body-rows">
                        <td>{key}</td>
                        <td>{(item.progress[key] / 10) * 100}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Dashboard;
