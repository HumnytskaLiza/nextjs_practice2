import arrowBtnIcon from "../assets/icon-arrow.svg";

function Faq() {
  return (
    <section id="faq">
      <div className="section-header">
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <ul id="questions">
        <li className="question">
          <div>
            <h4>What is Bookmark?</h4>
            <img
              className="faq-button"
              src={arrowBtnIcon}
              alt="Arrow button to show/hide the answer"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </li>
        <li className="question">
          <div>
            <h4>How can I request a new browser?</h4>
            <img
              className="faq-button"
              src={arrowBtnIcon}
              alt="Arrow button to show/hide the answer"
            />
          </div>
          <p>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </li>

        <li className="question">
          <div>
            <h4>Is there a mobile app?</h4>
            <img
              className="faq-button"
              src={arrowBtnIcon}
              alt="Arrow button to show/hide the answer"
            />
          </div>
          <p>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </p>
        </li>

        <li className="question">
          <div>
            <h4>What about other Chromium browsers?</h4>
            <img
              className="faq-button"
              src={arrowBtnIcon}
              alt="Arrow button to show/hide the answer"
            />
          </div>
          <p>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
        </li>
      </ul>
      <button className="primary-btn">More info</button>
    </section>
  );
}

export default Faq;
