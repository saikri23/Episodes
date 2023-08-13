import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus=useOnlineStatus();

  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img src={LOGO_URL} alt="" className="logo" />
      </div>
      <div className="navItems">
        <ul>
          <li>Status:{onlineStatus?"✅":"🔴"}</li>
          <li> <Link to="/">Home</Link> </li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
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
