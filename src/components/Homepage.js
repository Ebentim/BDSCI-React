import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavButtons } from "../Assets/next";
import dmvLogo from "../Assets/images/dmv.png";
import Signin from "./Signin";
function Homepage() {
  const navigate = useNavigate();
  const handleCta = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  const SignInButton = () => {
    return (
      <NavButtons onclick={handleCta} classname="hero-cta">
        Register
      </NavButtons>
    );
  };
  return (
    <main id="homepage">
      <section id="hero">
        <div className="hero">
          <div className="texts">
            <h3>Online Driver's Ed Course</h3>
            <h4>California DMV Approved</h4>
            <img src={dmvLogo} alt="dmv logo" />
            <h4 className="course-description price">$39</h4>
            <SignInButton />
          </div>
          <Signin classname="homepage-signin" />
        </div>
      </section>
      <section id="about">
        <h3 className="section-heading">About Us</h3>
        <div className="about-texts">
          <div className="subsection-card">
            <p className="section-content">
              Bakkers Driving School provides a convenient and accessible online
              platform for learning the rules of the road and preparing for your
              driver's license exam. Our user-friendly website allows you to
              enjoy a streamlined learning experience from the comfort of your
              home.
            </p>
          </div>
          <div className="subsection-card">
            <h4 className="section-subheading">Flexible Learning</h4>
            <p className="subsection-content">
              <i>Learn at your own pace, anytime, anywhere.</i>
              <br />
              Our platform allows you to access course materials, complete
              interactive lessons, and track your progress seamlessly.
            </p>
          </div>
          <div className="subsection-card">
            <h4 className="section-subheading">Engaging Learning Experience</h4>
            <p className="subsection-content">
              Our interactive platform features engaging content, quizzes, and
              practice tests to make learning fun and effective. Stay motivated
              and retain information more efficiently.
            </p>
          </div>
          <div className="subsection-card">
            <h4 className="section-subheading">Mobile Friendly Design</h4>
            <p className="subsection-content">
              <i>
                Access your course materials and complete lessons on the go.
              </i>
              <br />
              Our website is optimized for all devices, including desktops,
              tablets, and smartphones.
            </p>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="contact">
          <h3 className="section-heading">Contact Us</h3>
          <p>Have a question or want to get in touch? Reach out to us at:</p>
          <br />
          <a href="mailto:care@bakkersdrivingschool.com">
            care@bakkersdrivingschool.com
          </a>
          <br />
          <h4>Visit our website for more information</h4>
          <a href="https://www.bakkersdrivingschool.com">
            www.bakkersdrivingschool.com
          </a>
        </div>
      </section>
    </main>
  );
}
export default Homepage;
