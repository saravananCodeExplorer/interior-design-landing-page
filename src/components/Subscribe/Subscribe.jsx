import "./Subscribe.css";
import subscribeImg from "/src/assets/images/subscribe.jpg";

const Subscribe = () => {
  return (
    <section className="subscribe">

      <div className="subscribe-bg-text">
        FREE GUIDE
      </div>

      <div className="subscribe-container">

        <div className="subscribe-image">
          <img
            src={subscribeImg}
            alt="Perfect Paint Color Guide"
          />
        </div>

        <div className="subscribe-content">

          <span className="subscribe-small">
            FREE DOWNLOAD
          </span>

          <h2>
            PERFECT PAINT
            <br />
            COLOR GUIDE
          </h2>

          <p>
            Struggling to pick paint colors for your home?
            Download our list of the best paint colors for
            your home. Soft, muted and pure perfection!
          </p>

          <form className="subscribe-form">

            <input
              type="email"
              placeholder="Email Address"
            />

            <button type="submit">
              SUBSCRIBE
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Subscribe;