import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-modal';
import '../styles/Footer.css';
import Tab from 'react-bootstrap/Tab';
import logo from '../images/logo.png';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [invalidEmailFormat, setInvalidEmailFormat] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // Validera e-postformatet
    const isValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredEmail);
    setInvalidEmailFormat(!isValidFormat);
  };

  const handleSubscribe = () => {
    if (!email || invalidEmailFormat) {
      return; // Avbryt prenumerationen om e-postadressen är tom eller ogiltig
    }

    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <footer id="footer">
      <Tab.Container>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <div>
              <Link to="/">
                <img className="logo" src={logo} alt="Logo" />
              </Link>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div>
              <h5 className="font-weight-bold">HOUSE OF OUTON</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Our Story</Link>
                </li>
                <li>
                  <Link to="/">Our Material</Link>
                </li>
                <li>
                  <Link to="/">Transparency</Link>
                </li>
                <li>
                  <Link to="/">Our Stores</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div>
              <h5 className="font-weight-bold">CUSTOMER CARE</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Delivery and Returns</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div>
              <h5 className="font-weight-bold">NEWSLETTER</h5>
              <div className="subscribe-container">
                <div className="subscribe-input">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="E-mail"
                      className={`email-input form-control ${
                        invalidEmailFormat ? 'is-invalid' : ''
                      }`}
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <div className="input-group-append">
                      <span
                        className="subscribe-link"
                        onClick={handleSubscribe}
                      >
                        Subscribe
                      </span>
                    </div>
                    {invalidEmailFormat && (
                      <div className="invalid-feedback">
                        Invalid email format
                      </div>
                    )}
                  </div>
                </div>
                <div className="subscribe-line"></div>
              </div>

              <div className="social-icons">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-tiktok"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Tab.Container>
      <Modal
        isOpen={showPopup}
        onRequestClose={handleClosePopup}
        contentLabel="Subscribe Popup"
        className="subscribe-popup"
        overlayClassName="subscribe-popup-overlay"
      >
        <h3>Thank you for subscribing!</h3>
        <button onClick={handleClosePopup}>Close</button>
      </Modal>
      <div className="footer-container">
        <div className="footer-line"></div>
        <span className="footer-text">
          &copy; 2023 Outon company, all rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
