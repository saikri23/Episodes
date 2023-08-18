import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus=useOnlineStatus();

  const data=useContext(UserContext);
  const {loggedInUser}=data;

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
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
