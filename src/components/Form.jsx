function Form() {
  return (
    <section id="form" className="justify-content-center">
      <div id="purple-bg"></div>
      <div>
        <p>35,000+ already joined</p>
        <h2>Stay up-to-date with what we're doing</h2>
      </div>
      <form>
        <input
          type="text"
          name="email-input"
          placeholder="Enter your email address"
          required
        />
        <button id="submit-btn" className="primary-btn">
          Contact Us
        </button>
      </form>
    </section>
  );
}

export default Form;
