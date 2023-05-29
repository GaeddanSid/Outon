import '../styles/Navbar.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import Search from '../images/search-icon.png';
import Shoppingbag from '../images/shoppingbag.png';

function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <nav>
        <div className="navbar-container">
          <Link to="/">
            <img className="nav-logo" src={Logo} alt="Logo" />
          </Link>
          {screenWidth <= 810 ? (
            <div
              className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              {' '}
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          ) : (
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
            </div>
          )}
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
      </nav>
      {/* Slide-in menu */}
      {isMenuOpen && (
        <div className="slide-in-menu">
          <ul>
            <li>
              <Link to="/">News</Link>
            </li>
            <li>
              <Link to="/products">All sunglasses</Link>
            </li>
            <li>
              <Link to="/">House of OutOn</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
