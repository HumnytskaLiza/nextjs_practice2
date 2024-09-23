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
          id="input"
          placeholder="Enter your email address"
          required
        />
        <input
          type="submit"
          id="submit-btn"
          className="primary-btn"
          value="Contact Us"
        />
      </form>
    </section>
  );
}

export default Form;
