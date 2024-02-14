import { Link } from "react-router-dom";
import { NavButtons } from "../Assets/next";
import "../App.css"
function Header() {
  
  const SignInButton = () => {
    return (
      <Link to="/Signin" className="headerSignIn">
        <NavButtons classname="signin">Signin</NavButtons>
      </Link>
    );
  }
  return (
    <div className="header">
      <Link to="/">
        <h1>BDS</h1>
      </Link>
      <SignInButton/>
    </div>
  );
}
export default Header;
