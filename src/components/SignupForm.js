import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavButtons } from "../Assets/next";
import "../App.css";
import "../styles/general.css";
function SignupForm({ classname }) {
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const SignupButton = () =>
    submissionStatus ? (
      <NavButtons classname="signup-cta submitting"></NavButtons>
    ) : (
      <NavButtons classname="signup-cta">Registration</NavButtons>
    );

  return (
    <>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          address: "",
          pnumber: "",
          ynumber: "",
          email: "",
          password: "",
          birthdate: "",
          pname: "",
          pemail: "",
        }}
        validationSchema={Yup.object({
          firstname: Yup.string()
            .min(2, "Must be at least 2 characters")
            .required("first name is required"),
          lastname: Yup.string()
            .min(2, "Must be at least 2 characters")
            .required("last name is required"),
          address: Yup.string().required("Home address is required"),
          pnumber: Yup.number().required(
            "student's parent or guardian phone number is required"
          ),
          ynumber: Yup.number().required("Student's phone number is required"),
          email: Yup.string()
            .email("Enter a valid email address")
            .required("email is required required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("password is required"),
          birthdate: Yup.date()
            .max(
              new Date(Date.now() - 473385600000),
              "You must be at least 13 years old"
            )
            .required("Student's date of birth is required"),
          pname: Yup.string()
            .min(5, "Must be at least 5 letters")
            .required("Student's parent/guardian's name is required"),
          pemail: Yup.string()
            .email("Enter a valid email Address")
            .required("Student's parent/guardian's email address is required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmissionStatus(true);
          fetch("https://bakkers-driving-school.onrender.com/api/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          })
            .then((response) => {
              if (!response.ok) {
                alert(
                  "Registration Failed, Your email may already exist",
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
                window.location.replace("/signin");
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
        <Form className={classname}>
          <h3
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              color: "#365486",
            }}
          >
            Sign up
          </h3>
          <Field
            className="form-input"
            name="firstname"
            type="text"
            placeholder="Student's first Name"
          />
          <div className="errorMessage">
            <ErrorMessage name="firstname" />
          </div>
          <Field
            className="form-input"
            name="lastname"
            type="text"
            placeholder=" Student's last Name"
          />
          <div className="errorMessage">
            <ErrorMessage name="lastname" />
          </div>
          <Field
            className="form-input"
            name="address"
            type="text"
            placeholder="Address"
          />
          <div className="errorMessage">
            <ErrorMessage name="address" />
          </div>

          <Field
            className="form-input"
            name="ynumber"
            type="number"
            placeholder="Student's phone number"
          />
          <div className="errorMessage">
            <ErrorMessage name="ynumber" />
          </div>

          <Field
            className="form-input"
            name="birthdate"
            type="date"
            placeholder="Date of Birth"
          />
          <div className="errorMessage">
            <ErrorMessage name="birthdate" />
          </div>
          <Field
            className="form-input"
            name="email"
            type="email"
            placeholder="Student's email address for login"
          />
          <div className="errorMessage">
            <ErrorMessage name="email" />
          </div>
          <Field
            className="form-input"
            name="password"
            type="Password"
            placeholder="Create Password"
          />
          <div className="errorMessage">
            <ErrorMessage name="password" />
          </div>
          <Field
            className="form-input"
            name="pname"
            type="text"
            placeholder="Parent's full name"
          />
          <div className="errorMessage">
            <ErrorMessage name="pname" />
          </div>
          <Field
            className="form-input"
            name="pnumber"
            type="number"
            placeholder="Parent phone number"
          />
          <div className="errorMessage">
            <ErrorMessage name="pnumber" />
          </div>
          <Field
            className="form-input"
            name="pemail"
            type="email"
            placeholder="Parent's email address"
          />
          <div className="errorMessage">
            <ErrorMessage name="pemail" />
          </div>
          <SignupButton />
        </Form>
      </Formik>
    </>
  );
}

export default SignupForm;
