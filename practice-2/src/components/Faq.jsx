import { useState } from "react";
import arrowBtnIcon from "../assets/icon-arrow.svg";
import faqContent from "./FaqContent";

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
        {faqContent.map((question) => {
          const [open, setOpen] = useState(false);

          return (
            <li
              className="question"
              key={question["id"]}
              onClick={() => setOpen(!open)}
            >
              <div>
                <h4>{question["question"]}</h4>
                <img
                  className={open ? " active" : ""}
                  src={arrowBtnIcon}
                  alt="Arrow button to show/hide the answer"
                />
              </div>
              <p className={open ? " active" : ""}>{question["answer"]}</p>
            </li>
          );
        })}
      </ul>

      <button className="primary-btn">More info</button>
    </section>
  );
}

export default Faq;
