import { useState } from "react";
import featuresContent from "./FeaturesContent";

function Features() {
  const [openedTab, setOpenedTab] = useState("simpleBookmarking");

  function changeTabContent(tabName) {
    setOpenedTab(tabName);
  }

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
        <div
          className={openedTab === "simpleBookmarking" ? "active" : ""}
          onClick={() => changeTabContent("simpleBookmarking")}
        >
          Simple Bookmarking
        </div>
        <div
          className={openedTab === "speedySearching" ? "active" : ""}
          onClick={() => changeTabContent("speedySearching")}
        >
          Speedy Searching
        </div>
        <div
          className={openedTab === "easySharing" ? "active" : ""}
          onClick={() => changeTabContent("easySharing")}
        >
          Easy Sharing
        </div>
      </div>

      <div className="features-content">
        <div className="features-photo">
          <img
            src={featuresContent[openedTab]["feature-img"]}
            alt="Feature illustration"
          />
          <div id="feature-section-purple-blob"></div>
        </div>
        <div className="features-description">
          <h3>{featuresContent[openedTab]["feature-header"]}</h3>
          <p>{featuresContent[openedTab]["feature-desc"]}</p>
          <button className="primary-btn">More info</button>
        </div>
      </div>
    </section>
  );
}

export default Features;
