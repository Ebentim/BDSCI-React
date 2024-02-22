import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import * as Yup from "yup";
import "../App.css";
import "../styles/general.css";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const { setAccessToken } = useAuth();
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="signin-page-container">
      <div className="Signin-page">
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
          fetch("/api/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          })
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error("Invalid Email or Password");
            })
            .then((data) => {
              const accessToken = data?.accessToken;
              if (accessToken) {
                setAccessToken(accessToken); // Set the access token in the AuthContext
                navigate("/dashboard");
              } else {
                throw new Error("Access token not provided");
              }
            })
            .catch((error) => {
              console.error("Error during signin:", error);
              alert(error.message);
              resetForm();
              setSubmissionStatus(false);
            })
            .finally(() => {
              setSubmissionStatus(false);
            });
        }}
      >
        <Form className="signin-form">
          <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Sign in</h3>

          <label htmlFor="email">Registered Email</label>

          <Field name="email" type="email" placeholder="Email" />

          <ErrorMessage name="email" />

          <label htmlFor="password">Password</label>

          <Field name="password" type="password" placeholder="Password" />

          <ErrorMessage name="password" />

          {submissionStatus ? (
            <button className="Signup submitting"></button>
          ) : (
            <button type="submit" className="Signup">
              Sign in
            </button>
          )}
        </Form>
      </Formik>
    </div>
    </div>
  );
}
