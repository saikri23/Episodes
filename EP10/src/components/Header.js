import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus=useOnlineStatus();

  return (
    <div className="flex justify-between  bg-pink-200 shadow-lg">
      <div className="w-56">
        <img src={LOGO_URL} alt="" className="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex mx-4 ">
          <li className="px-4">Status:{onlineStatus?"✅":"🔴"}</li>
          <li className="px-4"> <Link to="/">Home</Link> </li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
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
