import "./About.css";
const About = () => {
  return (
    <section className="about">

      <div className="about-left">

        <img
          src="/src/assets/images/about_bg.jpg"
          alt=""
          className="about-bg"
        />

        <div className="about-image">

          <img
            src="/src/assets/images/founder.jpg"
            alt="Founder"
          />

        </div>

      </div>

      <div className="about-right">

        <span className="about-subtitle">
          designer + founder
        </span>

        <h2>
          ELEANOR
          <br />
          JEAN
        </h2>

       <p>
           Mustache leggings mumblecore, food truck selfies bitters ramps fashion
    axe waistcoat four dollar toast. Heirloom sus viral freegan pickled
    brunch actually flannel. Venmo freegan taiyaki pug cliche milkshk,
    hella slow-carb meh. Iceland chia drinking vinegar poutine kickstarter,
    taxidermy DSA. Poutine slow-carb banjo skateboard selfies ethical
    retro hoodie occupy salvia bodega boys.
       </p>

        <a href="/">READ MY STORY</a>

      </div>

    </section>
  );
};

export default About;