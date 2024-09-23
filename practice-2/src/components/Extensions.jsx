import logoChrome from "../assets/logo-chrome.svg";
import logoFirefox from "../assets/logo-firefox.svg";
import logoOpera from "../assets/logo-opera.svg";
import dots from "../assets/bg-dots.svg";

function Extensions() {
  return (
    <section id="download-extension">
      <div className="section-header">
        <h2>Download the extension</h2>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="browser-cards">
        <div className="justify-content-center">
          <div className="justify-content-center">
            <img src={logoChrome} alt="Chrome logo" />
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
          </div>
          <img src={dots} className="dots-img" alt="Card decor" />
          <button className="primary-btn">Add & Install Extension</button>
        </div>
        <div className="justify-content-center">
          <div className="justify-content-center">
            <img src={logoFirefox} alt="Firefox logo" />
            <h3>Add to Firefox</h3>
            <p>Minimum version 55</p>
          </div>
          <img src={dots} className="dots-img" alt="Card decor" />
          <button className="primary-btn">Add & Install Extension</button>
        </div>
        <div className="justify-content-center">
          <div className="justify-content-center">
            <img src={logoOpera} alt="Opera logo" />
            <h3>Add to Opera</h3>
            <p>Minimum version 46</p>
          </div>
          <img src={dots} className="dots-img" alt="Card decor" />
          <button className="primary-btn">Add & Install Extension</button>
        </div>
      </div>
    </section>
  );
}

export default Extensions;
