import logo from "../assets/logo-bookmark.svg";
import burgerIcon from "../assets/icon-hamburger.svg";
import logoPhoneMenu from "../assets/logo-bookmark.png";
import closeIcon from "../assets/icon-close.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt="Bookmark logo" />
        </div>
        <div>
          <div id="burger-menu">
            <img src={burgerIcon} alt="Burger icon" />
          </div>
          <div className="nav-links-mobile">
            <div>
              <div>
                <img src={logoPhoneMenu} alt="Bookmark logo (phone version)" />
                <img
                  src={closeIcon}
                  id="close-btn"
                  alt="Burger menu close button"
                />
              </div>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
              <button id="login-btn">Login</button>
            </div>
            <div className="icons">
              <img src={facebook} alt="Facebook icon" />
              <img src={twitter} alt="Twitter icon" />
            </div>
          </div>

          <div className="nav-links">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <button className="primary-btn">Login</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
