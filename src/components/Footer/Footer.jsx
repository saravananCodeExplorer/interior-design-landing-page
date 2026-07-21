import "./Footer.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

import footer1 from "/src/assets/images/footer.jpg";
import footer2 from "/src/assets/images/new_build.jpg";
import footer3 from "/src/assets/images/renovations.jpg";
import footer4 from "/src/assets/images/blog1.jpg";
import footer5 from "/src/assets/images/bed_room_3.jpg";
import footer6 from "/src/assets/images/hero_bg.jpg";

const gallery = [
  footer1,
  footer2,
  footer3,
  footer4,
  footer5,
  footer6,
];

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Gallery */}

      <div className="footer-gallery">

        {gallery.map((image, index) => (
          <div className="footer-gallery-item" key={index}>
            <img src={image} alt="" />
          </div>
        ))}

      </div>

      {/* Instagram */}

      <div className="footer-instagram">
        @IGHANDLE
      </div>

      {/* Main Footer */}

      <div className="footer-content">

        {/* Left */}

        <div className="footer-left">

          <span className="footer-menu-title">
            menu
          </span>

          <ul>

            <li><a href="/">SERVICES</a></li>

            <li><a href="/">PORTFOLIO</a></li>

            <li><a href="/">ABOUT</a></li>

            <li><a href="/">CONTACT</a></li>

            <li><a href="/">BLOG</a></li>

            <li><a href="/">INQUIRE</a></li>

          </ul>

        </div>

        {/* Center */}

        <div className="footer-center">

          <div className="footer-logo">

            <span>EJ</span>

          </div>

          <h2>ELEANOR JEAN</h2>

          <p>interior design</p>

        </div>

        {/* Right */}

        <div className="footer-right">

          <div className="footer-social">

            <a href="/"><FaFacebookF /></a>

            <a href="/"><FaTwitter /></a>

            <a href="/"><FaInstagram /></a>

            <a href="/"><FaPinterestP /></a>

          </div>

          <button>
            SUBSCRIBE
          </button>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          COPYRIGHT 2026 ELEANOR JEAN.
          ALL RIGHTS RESERVED.
          MADE BY BLAIR STAKY
        </p>

        <div className="footer-line"></div>

      </div>

    </footer>
  );
};

export default Footer;