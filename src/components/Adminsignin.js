import { Formik, Form, Field, ErrorMessage } from "formik";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import * as Yup from "yup";
import "../App.css";
import "../styles/general.css";
import { Link, useNavigate } from "react-router-dom";
import { NavButtons } from "../Assets/next";

export default function Adminsignin() {
  const { setAccessToken, setUserId } = useAuth();
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const navigate = useNavigate();
  const SubmitButtons = () =>
    submissionStatus ? (
      <NavButtons classname="signup-cta submitting"></NavButtons>
    ) : (
      <NavButtons classname="signup-cta">Sign In</NavButtons>
    );

  return (
    <section className="signin-page">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Please input a valid email address")
            .required("Email is required"),
          password: Yup.string().required("Please input your password"),
        })}
        onSubmit={(values, { resetForm }) => {
          setSubmissionStatus(true);
          const fetchData = async () => {
            try {
              const response = await fetch(
                "https://bakkers-driving-school.onrender.com/api/adminsignin",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                }
              );

              if (!response.ok) {
                throw new Error("Invalid Email or Password");
              }

              const data = await response.json();
              const accessToken = data?.accessToken;
              const decodedToken = jwtDecode(accessToken);

              if (accessToken) {
                setAccessToken(accessToken);
                setUserId(decodedToken?.userid);
                navigate("/admindashboard");
              } else {
                throw new Error("Access token not provided");
              }
            } catch (error) {
              console.error("Error during signin:", error);
              alert(error.message);
              resetForm();
            } finally {
              setSubmissionStatus(false);
            }
          };
          fetchData();
        }}
      >
        <Form className="signin-form">
          <p style={{ textAlign: "center" }}>
            Click Here to{" "}
            <span>
              <Link
                to={"/adminsignin"}
                style={{
                  color: "#365486",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                Sign in
              </Link>
            </span>
          </p>
          <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Sign in</h3>

          <label htmlFor="email">Registered Email</label>

          <Field name="email" type="email" placeholder="Email" />

          <div className="errorMessage">
            {" "}
            <ErrorMessage name="email" />
          </div>
          <label htmlFor="password">Password</label>

          <Field name="password" type="password" placeholder="Password" />

          <div className="errorMessage">
            <ErrorMessage name="password" />
          </div>
          <SubmitButtons />
        </Form>
      </Formik>
    </section>
  );
}
