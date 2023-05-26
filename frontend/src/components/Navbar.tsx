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
            <img className="nav-logo" src={Logo} alt="Logo" />
          </Link>
          <div className="nav-links-container">
            <div className="text-links-box">
              <ul className="nav-links">
                <li className="news">
                  <Link to="/">News</Link>
                </li>
                <li className="nav-link-text">
                  <Link to="/products">All sunglasses</Link>
                </li>
                <li className="nav-link-text">
                  <Link to="/">House of OutOn</Link>
                </li>
              </ul>
            </div>
            <div className="icon-links-box">
              <ul className="icons-ul">
                <li className="nav-icons-li">
                  <img className="nav-icons search" src={Search} alt="Search" />
                </li>
                <li className="nav-icons-li">
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
