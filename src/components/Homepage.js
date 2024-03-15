import React from "react";
import { Link } from "react-router-dom";
import { NavButtons } from "../Assets/next";
import SignupForm from "./SignupForm";
function Homepage() {
  const SignInButton = () => {
    return (
      <Link to="/Signin" className="headerSignIn">
        <NavButtons classname="Signup">Sign In</NavButtons>
      </Link>
    );
  };
  return (
    <main className="Homepage">
      <div className="text-container">
        <div className="texts">
          <h3 className="course-name">
            Bakkers Driving School Online Driver's Ed course
          </h3>
          <hr />
          <h5 className="course-description">
            California DMV approved Online Driver's Ed Course
          </h5>
          <h6 className="course-description">$39.99</h6>
          <SignInButton />
        </div>
      </div>
      <div className="form-container">
        <SignupForm />
      </div>
    </main>
  );
}
export default Homepage;
