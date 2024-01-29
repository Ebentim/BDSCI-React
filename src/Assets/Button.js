import { Link } from "react-router-dom"
function Button() {
    return (
      <div>
        <Link to="/Signin">
          <button className="signin">Signin</button>
        </Link>
      </div>
    );
}
export default Button

