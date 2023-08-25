import Logo from "../assets/delo-logo.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setbtnName] = useState("Login");
    const cartItems = useSelector(store => store.cart.items);

    // const {loggedInUser} = useContext(UserContext);

    return (
        <div className="flex justify-between shadow-lg bg-white px-8">
            <div className="ml-14 my-6">
                <img className="w-30 h-12 rounded" data-testid="logo" src={Logo} alt="delo-logo"></img>
            </div>
            <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-5 font-medium hover:text-orange-500">
                    <Link to="/" className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    Home</Link>
                </li>
                <li className="px-5 font-medium hover:text-orange-500">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="px-5 font-medium hover:text-orange-500">
                    <Link to="/contact" className="flex">Contact Us</Link>
                </li>
                {/* <li className="px-5 font-medium hover:text-orange-500">
                    <Link to="/grocery">Grocery</Link>
                </li> */}
                <li className="px-5 font-medium hover:text-orange-500">
                    <Link to="/cart" className="flex">
                    Cart - {cartItems.length} items</Link>
                </li>         
                <button className="px-5 py-1 mx-4 rounded font-medium bg-orange-400 text-white"
                    onClick={() => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                    }}
                >{btnName}</button>
                {/* <li className="px-4 font-medium">{loggedInUser}</li> */}
            </ul>
            </div>
        </div>
    );
};

export default Header;