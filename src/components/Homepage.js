import React from "react";
import { useNavigate } from "react-router-dom";
import { NavButtons } from "../Assets/next";
import cover from "../Assets/images/aboutCover.jpg";
import dmvLogo from "../Assets/images/dmv.png";
import certificate from "../Assets/images/certificate.jpg";
// import Signin from "./Signin";
import SignupForm from "./SignupForm";
function Homepage() {
  const navigate = useNavigate();
  const handleCta = (e) => {
    e.preventDefault();
    navigate("/signin");
  };
  const SignInButton = () => {
    return (
      <NavButtons onclick={handleCta} classname="hero-cta">
        Login for Continuing Students
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
          <SignupForm classname={"homepage-signin"} />
          {/* <Signin classname="homepage-signin" /> */}
        </div>
      </section>
      <section id="about">
        <h3 className="section-heading">About Us</h3>
        <div className="about-texts">
          <div className="subsection-card main-desc">
            <img
              src={cover}
              alt="Happy Student's holding their driving permits"
            />
            <p className="section-content">
              Bakkers Driving School provides a convenient and accessible online
              platform for learning the rules of the road and preparing for your
              driver's license exam. Our user-friendly website allows you to
              enjoy a streamlined learning experience from the comfort of your
              home.
            </p>
          </div>
          <h3 className="subsection-heading">Why Choose Us</h3>

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
              Embark on an immersive learning journey with our interactive
              course. Dive into educating content, engaging quizzes, and a
              seamless flow that guides you through the material. Experience a
              learning approach designed to keep you motivated and retain
              information effortlessly.
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
      <section id="curriculum">
        <div className="curriculum-texts">
          <div class="curriculum">
            <h2 className="section-heading">Our Curriculum</h2>
            <ul>
              <li>Unit One: Driving is your Responsibility</li>
              <li>Unit two: The Driver</li>
              <li>Unit Three: Natural Forces Affecting the Driver</li>
              <li>Unit Four: Signs, Signals, and Highway Markings</li>
              <li>Unit five : California Vehicle Code and Rules of the Road</li>
              <li>Unit Six : Causes and Costs of Accidents</li>
              <li>Unit Seven : Differences in Urban and Rural Driving</li>
              <li>Unit Eight : Chritical Vehicle Systems and Subsystems</li>
              <li>Unit Nine : Pedestrian Safety</li>
              <li>Unit ten : Effects of Alcohol and Drugs</li>
              <li>Unit Eleven : Motorcycle Safety</li>
              <li>
                Unit Twelve : Risk Taking and Risk Perception of Teenagers
              </li>
              <li>Unit Thirteen : Substance Abuse</li>
              <li>Unit Fourteen : Driving Inexperience</li>
              <li>Unit Fifteen : Road Rage</li>
            </ul>
          </div>
        </div>
        <div className="completion">
          <figure>
            <img src={certificate} alt="certificate copy" />
            <figcaption>
              A sample copy of the certificate that will be issued upon
              completion of the course
            </figcaption>
          </figure>
        </div>
      </section>
      <section id="contact">
        <div className="contact">
          <h3 className="section-heading">Contact Us</h3>
          <p>Have a question or want to get in touch? Reach out to us at:</p>
          <br />
          <a href="tel:+18584845832">858-484-5832</a>
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
