import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavButtons } from "../Assets/next";
import "../App.css";
import "../styles/general.css";
import { Link } from "react-router-dom";
function Adminsignup() {
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const SignupButton = () =>
    submissionStatus ? (
      <NavButtons classname="Signup submitting"></NavButtons>
    ) : (
      <NavButtons classname="Signup">Sign Up</NavButtons>
    );

  return (
    <main>
      <section id="admin">
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            firstname: Yup.string()
              .min(2, "Must be at least 2 characters")
              .required("first name is required"),
            lastname: Yup.string()
              .min(2, "Must be at least 2 characters")
              .required("last name is required"),
            email: Yup.string()
              .email("Enter a valid email address")
              .required("email is required required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters")
              .required("password is required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmissionStatus(true);
            fetch(
              "https://bakkers-driving-school.onrender.com/api/adminsignup",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              }
            )
              .then((response) => {
                if (!response.ok) {
                  alert(
                    "Email already exits, Please proceed to signin",
                    response
                  );
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
              })
              .then((data) => {
                if (
                  data.message &&
                  data.message.includes("registered successfully")
                ) {
                  resetForm();
                  window.location.replace("/adminsignin");
                }
              })
              .catch((error) => {
                console.error("Error submitting form:", error);
              })
              .finally(() => {
                setSubmitting(false);
                setSubmissionStatus(false);
              });
          }}
        >
          <Form id="admin-signup" style={{ margin: "0 auto" }}>
            <h3
              style={{
                textAlign: "center",
                fontSize: "1.5rem",
                color: "#365486",
                marginBottom: "10px",
              }}
            >
              Admin Sign up
            </h3>
            <Field
              className="form-input"
              name="firstname"
              type="text"
              placeholder="First Name"
            />
            <div className="errorMessage">
              <ErrorMessage name="firstname" />
            </div>
            <Field
              className="form-input"
              name="lastname"
              type="text"
              placeholder="Last Name"
            />
            <div className="errorMessage">
              <ErrorMessage name="lastname" />
            </div>
            <Field
              className="form-input"
              name="email"
              type="email"
              placeholder="Email Address"
            />
            <div className="errorMessage">
              <ErrorMessage name="email" />
            </div>
            <Field
              className="form-input"
              name="password"
              type="Password"
              placeholder="Password"
            />
            <div className="errorMessage">
              <ErrorMessage name="password" />
            </div>
            <SignupButton />
          </Form>
        </Formik>
      </section>
      <p style={{ marginTop: "20px", textAlign: "center" }}>
        Click Here to{" "}
        <span>
          <Link
            to={"/adminsignin"}
            style={{
              backgroundColor: "#365486",
              color: "white",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            Sign in
          </Link>
        </span>
      </p>
    </main>
  );
}

export default Adminsignup;
