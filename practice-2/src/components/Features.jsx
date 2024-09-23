import featuresIllustrationTab1 from "../assets/illustration-features-tab-1.svg";
import featuresIllustrationTab2 from "../assets/illustration-features-tab-2.svg";
import featuresIllustrationTab3 from "../assets/illustration-features-tab-3.svg";

function Features() {
  return (
    <section id="features">
      <div className="section-header">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div className="list-tabs">
        <div className="active">Simple Bookmarking</div>
        <div>Speedy Searching</div>
        <div>Easy Sharing</div>
      </div>

      <div className="features-content">
        <div className="features-photo">
          <img
            src={featuresIllustrationTab1}
            alt="Features tab 1: illustration"
          />
          <div id="feature-section-purple-blob"></div>
        </div>
        <div className="features-description">
          <h3>Bookmark in one click</h3>
          <p>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
          <button className="primary-btn">More info</button>
        </div>
      </div>
    </section>
  );
}

export default Features;
