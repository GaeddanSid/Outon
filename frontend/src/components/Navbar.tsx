import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <header>
      <nav>
        <div className="navbar-container">
          <Link to="/">
            <img className="logo" src="/images/logo.png" alt="Logo" />
          </Link>
          <div className="nav-links-container">
            <div className="text-links-box">
              <ul className="nav-links">
                <li className="nav-link-text">
                  <Link to="/">
                    <p>
                      <strong>News</strong>
                    </p>
                  </Link>
                </li>
                <li className="nav-link-text">
                  <Link to="/products">
                    <p>All sunglasses</p>
                  </Link>
                </li>
                <li className="nav-link-text">
                  <Link to="/">
                    <p>House of OutOn</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="icon-links-box">
              <ul className="nav-links">
                <li>
                  <img
                    className="nav-icons"
                    src="/images/search-icon.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="nav-icons"
                    src="/images/shoppingbag.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
