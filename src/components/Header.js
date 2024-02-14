import { Link } from "react-router-dom";
import { NavButtons } from "../Assets/next";
import "../styles/general.css";
import "../App.css"
function Header() {


  const SignInButton = () => {
    return (
      <Link to="/Signin" className="headerSignIn">
        <NavButtons classname="nextButton">Sign In</NavButtons>
      </Link>
    );
  }
  return (
    <div className="header">
      <Link to="/">
        <h1>Bakkers Driving School</h1>
      </Link>
      <SignInButton/>
    </div>
  );
}
export default Header;
