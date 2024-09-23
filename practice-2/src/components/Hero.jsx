import heroIllustration from "../assets/illustration-hero.svg";

function Hero() {
  return (
    <section id="hero-section" className="justify-content-center">
      <div className="section-header">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="buttons">
          <button className="primary-btn">Get it on Chrome</button>
          <button className="secondary-btn">Get it on Firefox</button>
        </div>
      </div>
      <div className="photo">
        <img
          src={heroIllustration}
          alt="Hero illustration: a tablet with opened web application"
        />
        <div id="hero-section-purple-blob"></div>
      </div>
    </section>
  );
}

export default Hero;
