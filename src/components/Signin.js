import "../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function Signin() {
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            window.location.replace("/profile");
          }, 5000);
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
          <button type="submit" className="signin">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
