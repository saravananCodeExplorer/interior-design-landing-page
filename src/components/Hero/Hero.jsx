import "./Hero.css";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <section id="services" className="hero">
          <Navbar />
          
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          We create spaces that feel
          <br />
          cozy <em>and</em> comfortable.
        </h1>
              
        <div className="hero-line"></div>

        <p>established 2015 • Aspen, CO</p>

        <div className="scroll-down">
          <span></span>
        </div>

      </div>
    </section>
  );
};

export default Hero;