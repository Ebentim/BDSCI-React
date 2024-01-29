import { Link } from "react-router-dom";
import Button from "../Assets/Button";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>BDS</h1>
      </Link>
      <Button />
    </div>
  );
}
export default Header;
