import { LOGO_URL } from "../utils/constant";

const Header = () => (
  <div className="headerContainer">
    <div className="logoContainer">
      <img
        src={LOGO_URL}    alt=""
        className="logo"
      />
    </div>
    <div className="navItems">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
