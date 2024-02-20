// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useContext, useState } from "react";
// import AuthContext from "../contexts/Authprovider";
// import * as Yup from "yup";
// import "../App.css";
// import "../styles/general.css";

// export default function Signin() {
//   const [submissionStatus, setSubmissionStatus] = useState(false);
//   const [setAuth] = useContext(AuthContext);

//   return (
//     <div className="Signin-page">
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validationSchema={Yup.object({
//           email: Yup.string()
//             .email("please input a valid email address")
//             .required("Email is Required"),
//           password: Yup.string().required("Please Input your password"),
//         })}
//         onSubmit={(values, { resetForm }) => {
//           setSubmissionStatus(true);
//           fetch("/api/signin", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(values),
//           }).then((response) => {
//             console.log(response);
//             if (response.status === 200) {
//               const accessToken = response?.accessToken;
//               setAuth({ accessToken });
//               window.location.replace("/dashboard");
//             }
//             if (!response.ok) {
//               alert("Invalid Email or Password");
//               resetForm();
//               setSubmissionStatus(false);
//             }
//           });
//         }}
//       >
//         <Form className="signin-form">
//           <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Sign in</h3>
//           <label htmlFor="email">Registered Email</label>
//           <Field name="email" type="email" placeholder="Email" />
//           <ErrorMessage name="email" />
//           <label htmlFor="password">Password</label>
//           <Field name="password" type="password" placeholder="Password" />
//           <ErrorMessage name="password" />
//           {submissionStatus ? (
//             <button className="Signup submitting"></button>
//           ) : (
//             <button type="submit" className="Signup">
//               Sign in
//             </button>
//           )}
//         </Form>
//       </Formik>
//     </div>
//   );
// }

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import AuthContext from "../contexts/Authprovider";
import * as Yup from "yup";
import "../App.css";
import "../styles/general.css";

export default function Signin() {
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const [setAuth] = useContext(AuthContext);

  return (
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
              console.log(response);
              if (response.status === 200) {
                return response.json(); // Parse the response as JSON
              }
              if (!response.ok) {
                throw new Error("Invalid Email or Password");
              }
            })
            .then((data) => {
              const accessToken = data?.accessToken;
              setAuth({ accessToken });
              window.location.replace("/dashboard");
            })
            .catch((error) => {
              alert(error.message);
              resetForm();
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
  );
}
