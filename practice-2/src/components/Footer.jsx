import bookmarkLogo from "../assets/logo-bookmark.png";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";

function Footer() {
  return (
    <footer className="justify-content-center">
      <div id="dark-bg"></div>
      <div className="justify-content-center">
        <img src={bookmarkLogo} alt="Bookmark logo"></img>
        <div className="footer-nav-links">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="icons justify-content-center">
        <img src={facebook} alt="Facebook icon" />
        <img src={twitter} alt="Twitter icon" />
      </div>
    </footer>
  );
}

export default Footer;
