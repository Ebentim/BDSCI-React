import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import SignUp from "../Assets/SignUp";
function SignupForm() {
    return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          address: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(2, "Must be at least 2 characters")
            .required("required"),
          lastName: Yup.string()
            .min(2, "Must be at least 2 characters")
            .required("required"),
          address: Yup.string().required(
            "Home address is required to mail your certificate"
          ),
          email: Yup.string()
            .email("Enter a valid email address")
            .required("required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 1000);
        }}
      >
        <Form>
          <Field
            className="form-input"
            name="firstName"
            type="text"
            placeHolder="First Name"
          />
          <ErrorMessage name="firstName" />
          <Field
            className="form-input"
            name="lastName"
            type="text"
            placeHolder="Last Name"
          />
          <ErrorMessage name="lastName" />
          <Field
            className="form-input"
            name="address"
            type="text"
            placeHolder="Address"
          />
          <ErrorMessage name="address" />
          <Field
            className="form-input"
            name="email"
            type="email"
            placeHolder="Email Address"
          />
          <ErrorMessage name="email" />
          <Field
            className="form-input"
            name="password"
            type="Password"
            placeHolder="Password"
          />
            <ErrorMessage name="password" />
                <SignUp/>
        </Form>
      </Formik>
    );
}

export default SignupForm