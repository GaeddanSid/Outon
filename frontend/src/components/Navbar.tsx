import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import Search from '../images/search-icon.png';
import Shoppingbag from '../images/shoppingbag.png';

function Navbar() {
  return (
    <header>
      <nav>
        <div className="navbar-container">
          <Link to="/">
            <img className="logo" src={Logo} alt="Logo" />
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
                  <img className="nav-icons search" src={Search} alt="Search" />
                </li>
                <li>
                  <img
                    className="nav-icons shoppingbag"
                    src={Shoppingbag}
                    alt="Shoppingbag"
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
