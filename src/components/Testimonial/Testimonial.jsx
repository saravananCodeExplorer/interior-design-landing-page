import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial">

      <div className="testimonial-container">

        <span className="testimonial-subtitle">
          WHAT OUR CLIENTS ARE SAYING
        </span>

        <h2 className="testimonial-title">
          "Our home went from being a place that
          <br />
          caused me stress to being an absolute
          <br />
          refuge. I never want to leave."
        </h2>

        <div className="testimonial-navigation">

          <button className="nav-btn">
            <span className="line"></span>
            PREVIOUS
          </button>

          <div className="divider"></div>

          <button className="nav-btn">
            NEXT
            <span className="line"></span>
          </button>

        </div>

      </div>

    </section>
  );
};

export default Testimonial;