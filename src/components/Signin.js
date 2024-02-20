import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import "../App.css";
import "../styles/general.css";

export default function Signin() {
  const [submissionStatus, setSubmissionStatus] = useState(false);
  return (
    <div className="Signin-page">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("please input a valid email address")
            .required("Email is Required"),
          password: Yup.string().required("Please Input your password"),
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
              response.json();
              console.log(response);
              if (response.status === 200) {
                setSubmissionStatus(true);
                window.location.replace("/dashboard");
              }
              if (!response.ok) {
                alert("Invalid Email or Password");
                resetForm();
                setSubmissionStatus(false);
              }
            })
            .then((data) => {
              console.log(data.messaage);

              // Check for success status or handle errors
            })
            .catch((error) => {
              console.error("Error submitting form:", error);
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
  );
}
