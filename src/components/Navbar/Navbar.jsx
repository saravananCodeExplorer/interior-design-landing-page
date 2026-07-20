import react from "react";
import "./Navbar.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">

      <div className="navbar-left">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaPinterestP /></a>
      </div>

      <div className="navbar-center">
        <h2>ELEANOR JEAN</h2>
        <p>interior design</p>
      </div>

      <div className="navbar-right">
        <span>INQUIRE</span>

        <button className="menu-btn">
          <span></span>
          <span></span>
        </button>
      </div>

    </header>
  );
};

export default Navbar;