import dots from "../assets/bg-dots.svg";
import extensionsContent from "./ExtensionsContent";

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
      <ul className="browser-cards">
        {extensionsContent.map((extension) => {
          return (
            <li
              className="justify-content-center"
              key={extension["extension-id"]}
            >
              <div className="justify-content-center">
                <img
                  src={extension["extension-img"]}
                  alt={`${extension["extension-id"]} logo`}
                />
                <h3>{extension["extension-header"]}</h3>
                <p>{extension["extension-version"]}</p>
              </div>
              <img src={dots} className="dots-img" alt="Card decor" />
              <button className="primary-btn">Add & Install Extension</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Extensions;
