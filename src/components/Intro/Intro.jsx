import "./Intro.css";

const services = [
  {
    id: "01",
    title: "NEW BUILDS",
    image: "/public/images/new_build.jpg",
  },
  {
    id: "02",
    title: "RENOVATIONS",
    image: "/public/images/renovations.jpg",
  },
  {
    id: "03",
    title: "DESIGN CONSULTS",
    image: "/public/images/design_consults.jpg",
  },
];

const Intro = () => {
  return (
    <section id="intro" className="intro">

      <div className="intro-container">

        {/* Logo */}
        <div className="intro-logo">
          <div className="logo-circle">
            EJ
          </div>
        </div>

        {/* Heading */}
        <h2>
          Cozy homes designed to
          <br />
          be lived in and loved.
        </h2>

        <p className="intro-text">
          Taiyaki irony stumptown bespoke, normcore cold-pressed man bun
          portland tilde blackbird spyplane organic VHS jean shorts.
          Man braid bruh portland gentrify, try-hard jianbing pabst.
        </p>

        <a href="/" className="intro-btn">
          SEE THE WORK
        </a>

        {/* Cards */}

        <div className="service-grid">

          {services.map((item) => (

            <div className="service-card" key={item.id}>

              <img
                src={item.image}
                alt={item.title}
              />

              <span>.{item.id}</span>

              <h3>{item.title}</h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Intro;