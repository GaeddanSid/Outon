import '../styles/Navbar.css';
import React, { useState, useEffect } from 'react';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import Search from '../images/search-icon.png';
import Shoppingbag from '../images/shoppingbag.png';

const Navbar: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = (): void => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <nav>
        {screenWidth <= 810 ? (
          <div className="navbar-container">
            <div className="nav-logo-box">
              <Link to="/">
                <img className="nav-logo" src={Logo} alt="Logo" />
              </Link>
            </div>
            <div
              className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="icon-links-box">
              <ul className="icons-ul">
                <li className="nav-icons-li">
                  <img className="nav-icons search" src={Search} alt="Search" />
                </li>
                <li className="nav-icons-li">
                  <Link to="/Product-details">
                    <img
                      className="nav-icons shoppingbag"
                      src={Shoppingbag}
                      alt="Shoppingbag"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="navbar-container">
            <div className="nav-logo-box">
              <Link to="/">
                <img className="nav-logo" src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="nav-links-container">
              <div className="text-links-box">
                <ul className="nav-links">
                  <li className="news">
                    <Link to="/">News</Link>
                  </li>
                  <li className="nav-link-text">
                    <Link to="/All-sunglasses">All sunglasses</Link>
                  </li>
                  <li className="nav-link-text">
                    <Link to="/about">House of OutOn</Link>
                  </li>
                  <li>
                    <Link to="/Login"> Login</Link>
                  </li>
                </ul>
              </div>
              <div className="icon-links-box">
                <ul className="icons-ul">
                  <li className="nav-icons-li">
                    <img
                      className="nav-icons search"
                      src={Search}
                      alt="Search"
                    />
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
        )}

        {isMenuOpen && (
          <div className={`slide-in-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/All-sunglasses">All sunglasses</Link>
              </li>
              <li>
                <Link to="/about">House of OutOn</Link>
              </li>
              <li>
                <Link to="/Login"> Login</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
