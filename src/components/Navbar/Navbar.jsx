import { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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

          <span className="inquire">INQUIRE</span>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
          </button>

        </div>

      </header>

      {/* Full Screen Menu */}

      <div className={`side-menu ${menuOpen ? "active" : ""}`}>

        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <a href="#hero" onClick={() => setMenuOpen(false)}>
          HOME
        </a>

        <a href="#intro" onClick={() => setMenuOpen(false)}>
          SERVICES
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          ABOUT
        </a>

      
        <a href="#testimonial" onClick={() => setMenuOpen(false)}>
          TESTIMONIAL
        </a>

        <a href="#project" onClick={() => setMenuOpen(false)}>
          PROJECTS
        </a>

        <a href="#blog" onClick={() => setMenuOpen(false)}>
          BLOG
        </a>

        <a href="#subscribe" onClick={() => setMenuOpen(false)}>
          CONTACT
        </a>

      </div>
    </>
  );
};

export default Navbar;