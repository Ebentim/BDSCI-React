import { Link, useLocation } from "react-router-dom";
import "../styles/general.css";
import "../App.css";
import Signout from "./Signout";
function Header() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="header">
      <Link to="/">
        <h1>Bakkers Driving School</h1>
      </Link>
      {location.pathname !== "/" &&
      location.pathname.toLowerCase() !== "/signin" &&
      location.pathname.toLowerCase() !== "/signup" &&
      location.pathname.toLowerCase() !== "/adminsignup" &&
      location.pathname.toLowerCase() !== "/adminsignin" &&
      location.pathname.toLowerCase() !== "/admin" ? (
        <Signout />
      ) : null}
    </div>
  );
}
export default Header;
