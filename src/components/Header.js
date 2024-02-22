import { Link } from "react-router-dom";
import "../styles/general.css";
import "../App.css"
function Header() {


 
  return (
    <div className="header">
      <Link to="/">
        <h1>Bakkers Driving School</h1>
      </Link>
    </div>
  );
}
export default Header;
