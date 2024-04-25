import { Link, useLocation } from "react-router-dom";
import "../styles/general.css";
import "../App.css";
import { useState } from "react";
// const nav = {
//   home: {
//     title: "Home",
//     links: "/",
//   },
//   about: {
//     title: "About",
//     links: "/#about",
//   },
//   contact: {
//     title: "Contact Us",
//     links: "#contact",
//   },
//   register: {
//     title: "Register",
//     links: "signup",
//   },
//   login: {
//     title: "login",
//     links: "/signin",
//   },
// };
function Header() {
  // const location = useLocation();
  const [active, setActive] = useState(false);
  const handleMenu = () => {
    setActive(!active);
  };
  return (
    <div className="header">
      <div className="header-icons">
        <Link to="/">
          <h1>Bakkers Driving School</h1>
        </Link>
        {/* <div onClick={handleMenu} className="icon-container">
          <div className={`close ${active ? "menu-rotate active" : "none"}`}>
            &#x0058;
          </div>
          <div className={`menu-icon ${active ? "none" : null}`}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </div>
        </div> */}
      </div>
      {/* <ul
        className={`navigation-list ${!active ? "menu-list" : null}`}
        onClick={handleMenu}
      >
        {Object.keys(nav).map((item) => {
          return (
            <li key={nav[item].title}>
              <Link to={nav[item].links}>{nav[item].title}</Link>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}
export default Header;
