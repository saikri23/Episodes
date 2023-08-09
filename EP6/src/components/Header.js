import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img src={LOGO_URL} alt="" className="logo" />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
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
