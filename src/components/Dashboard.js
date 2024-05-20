import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import "../styles/admin.css";
import { useLocation } from "react-router-dom";
const buttons = [
  "Student Details",
  "Parent Details",
  "Contact Details",
  "Certificate Status",
  "Test Scores",
  "Print Status",
];
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(buttons[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const printStatus = async (userId, print) => {
    try {
      const response = await axios.put(
        "https://bakkers-driving-school.onrender.com/api/print-status",
        {
          userId,
          print,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [source1, source2, source3, source4] = await Promise.all([
          axios.get(
            "https://bakkers-driving-school.onrender.com/api/profilesforadmindashboard"
          ),
          axios.get(
            "https://bakkers-driving-school.onrender.com/api/get-user-scores-admin"
          ),
          axios.get(
            "https://bakkers-driving-school.onrender.com/api/get-tokens"
          ),
          axios.get(
            "https://bakkers-driving-school.onrender.com/api/print-status"
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
          const printStatus = source4.data.printStatus.find(
            (s) => s.userId === profile._id
          );
          console.log(printStatus);
          if (score && token && printStatus) {
            merged.push({
              ...profile,
              progress: score,
              time: token.updatedAt,
              printStatus: printStatus,
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
  const handlePrint = (item, userId, print) => {
    printStatus(userId, print);
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
  console.log(filteredData, "filtered");
  const buttonStyles = {
    width: "120px",
    padding: "5px",
  };

  console.log(data);

  return (
    <main
      className={
        location.pathname.toLowerCase() === "/admindashboard"
          ? "admindashboard"
          : null
      }
    >
      <div className="search">
        <h2
          style={{
            textAlign: "center",
            fontSize: "24px",
            color: "green",
          }}
        >
          Online Drivers Education
        </h2>
        <h3 className="bold">{active}</h3>

        <div id="search-div">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <button
            type="button"
            className="search-button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div id="admin-content-container">
        <div
          style={{
            width: "125px",
            display: "flex",
            flexDirection: "column",
            gap: "3px",
          }}
        >
          {buttons.map((button, index) => (
            <button
              key={index}
              className="view-progress-button"
              style={buttonStyles}
              onClick={() => setActive(button)}
              disabled={active === button ? true : false}
            >
              {button}
            </button>
          ))}
        </div>
        <section id="admin-dashboard">
          {active === buttons[0] && (
            <table id="maintable">
              <thead>
                <tr id="table-head">
                  <th className="head">Student Name</th>
                  <th className="head">Date of Birth</th>
                  <th className="head">Email</th>
                  <th className="head">Phone</th>
                  <th className="head">Duration</th>
                  <th className="head">Last Login</th>
                </tr>
              </thead>
              <tbody id="table-body">
                {filteredData.map((item) => (
                  <tr key={item._id}>
                    <td className="body">
                      {item.firstname} {item.lastname}
                    </td>
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
                        const minutes =
                          Math.floor(difference / (1000 * 60)) % 60;
                        const hours =
                          Math.floor(difference / (1000 * 60 * 60)) % 24;
                        const days = Math.floor(
                          difference / (1000 * 60 * 60 * 24)
                        );
                        const months = Math.floor(
                          difference / (1000 * 60 * 60 * 24 * 30)
                        );
                        if (months && months > 0) {
                          return months + " months ago";
                        } else if (days && days > 0) {
                          return days > 0
                            ? days + " days ago"
                            : days + "day ago";
                        } else if (hours && hours > 0) {
                          return hours + " hours ago";
                        } else if (minutes && minutes > 0) {
                          return minutes + " minutes ago";
                        } else if (seconds && seconds > 0) {
                          return seconds + " seconds ago";
                        } else {
                          return "just now";
                        }
                      })()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {/* Parents Details here */}
          {active === buttons[1] && (
            <table id="maintable">
              <thead>
                <tr id="table-head">
                  <th className="head">Student Name</th>
                  <th className="head">Parent name</th>
                  <th className="head">Parent Email</th>
                  <th className="head">Parent phone</th>
                </tr>
              </thead>
              <tbody id="table-body">
                {filteredData.map((item) => (
                  <tr key={item._id}>
                    <td className="body">
                      {item.firstname} {item.lastname}
                    </td>
                    <td className="body">{item.pname}</td>
                    <td className="body email">{item.pemail}</td>
                    <td className="body">{item.pnumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {/* Contact Details */}
          {active === buttons[2] && (
            <table id="maintable">
              <thead>
                <tr id="table-head">
                  <th className="head">Student Name</th>
                  <th className="head">Mailing Address</th>
                  <th className="head">Parent Email</th>
                  <th className="head">Parent phone</th>
                </tr>
              </thead>
              <tbody id="table-body">
                {filteredData.map((item) => (
                  <tr key={item._id}>
                    <td className="body">
                      {item.firstname} {item.lastname}
                    </td>
                    <td className="body">{item.address}</td>
                    <td className="body email">{item.pemail}</td>
                    <td className="body">{item.pnumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {/* Certificate Status */}
          {active === buttons[3] && (
            <table id="maintable">
              <thead>
                <tr id="table-head">
                  <th className="head">Student Name</th>
                  <th className="head">Certificate Status</th>
                  <th className="head">Action</th>
                </tr>
              </thead>
              <tbody id="table-body">
                {filteredData.map((item) => (
                  <tr key={item._id}>
                    <td className="body">
                      {item.firstname} {item.lastname}
                    </td>
                    <td className="body">
                      {Object.keys(item.progress)
                        .slice(2, 18)
                        .every((key) => item.progress[key] >= 8)
                        ? "Ready for Printing"
                        : "Not Ready for Printing"}
                    </td>
                    <td className="body">
                      <button
                        onClick={() =>
                          handlePrint(
                            item,
                            { userId: item._id },
                            { printStatus: true }
                          )
                        }
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
          {/* Test Scores */}
          {active === buttons[4] && (
            <div className="progress-container">
              {filteredData.map((item) => (
                <table className="progress-table" key={item._id}>
                  <thead className="headname">
                    {item.firstname} {item.lastname}
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
                          <td>
                            {key.includes("chapter")
                              ? key.replace("chapter", "Chapter ")
                              : key.includes("final")
                              ? key.replace("final", "Final ")
                              : ""}
                          </td>
                          <td>
                            {key.includes("final")
                              ? (item.progress[key] / 40) * 100
                              : (item.progress[key] / 10) * 100}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              ))}
            </div>
          )}
          {/* print status */}
          {active === buttons[5] && (
            <table id="maintable">
              <thead>
                <tr id="table-head">
                  <th className="head">Student Name</th>
                  <th className="head">Certificate Print Status</th>
                  <th className="head">Action</th>
                </tr>
              </thead>
              <tbody id="table-body">
                {filteredData.map((item) => (
                  <tr key={item._id}>
                    <td className="body">
                      {item.firstname} {item.lastname}
                    </td>
                    <td className="body">
                      {item.printStatus.printStatus ? "Printed" : "Not Printed"}
                    </td>
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
        </section>
      </div>
    </main>
  );
};

export default Dashboard;

/**
 * 
 * {active === buttons[0] && (
            <table id="maintable">
              <thead>
                <tr id="table-head">
                  <th className="head">Student Name</th>
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
                    <td className="body">{item.firstname} {item.lastname}</td>
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
                        const minutes =
                          Math.floor(difference / (1000 * 60)) % 60;
                        const hours =
                          Math.floor(difference / (1000 * 60 * 60)) % 24;
                        const days = Math.floor(
                          difference / (1000 * 60 * 60 * 24)
                        );
                        const months = Math.floor(
                          difference / (1000 * 60 * 60 * 24 * 30)
                        );
                        if (months && months > 0) {
                          return months + " months ago";
                        } else if (days && days > 0) {
                          return days > 0
                            ? days + " days ago"
                            : days + "day ago";
                        } else if (hours && hours > 0) {
                          return hours + " hours ago";
                        } else if (minutes && minutes > 0) {
                          return minutes + " minutes ago";
                        } else if (seconds && seconds > 0) {
                          return seconds + " seconds ago";
                        } else {
                          return "just now";
                        }
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
 */
