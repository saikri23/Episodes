import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img src={LOGO_URL} alt="" className="logo" />
      </div>
      <div className="navItems">
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <button
            className="btn-Log"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
