import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavButtons } from "../Assets/next";
import "../App.css";
import "../styles/general.css";
function SignupForm() {
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const SignupButton = () =>
    submissionStatus ? (
      <NavButtons classname="Signup submitting"></NavButtons>
    ) : (
      <NavButtons classname="Signup">Sign Up</NavButtons>
    );

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        address: "",
        email: "",
        password: "",
        birthdate: "",
      }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .min(2, "Must be at least 2 characters")
          .required("first name is required"),
        lastname: Yup.string()
          .min(2, "Must be at least 2 characters")
          .required("last name is required"),
        address: Yup.string().required("Home address is required"),
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
          .required("Your date of birth is equired"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmissionStatus(true);
        fetch(
          "https://bakkers-driving-school.onrender.com/api/signup",
          // "http://localhost:5000/api/signup",
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
                "Registration Failed, Your email may already exist",
                response
              );
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data); // Log the response data to the console

            // Check if registration is successful
            if (
              data.message &&
              data.message.includes("registered successfully")
            ) {
              // Clear the form fields
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
      <Form className="signup-form">
        <p
          style={{ textAlign: "center", fontSize: "1.5rem", color: "#365486" }}
        >
          Sign up
        </p>
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
          name="address"
          type="text"
          placeholder="Address"
        />
        <div className="errorMessage">
          <ErrorMessage name="address" />
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
  );
}

export default SignupForm;
