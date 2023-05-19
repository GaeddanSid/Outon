import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/Footer.css';

const Footer = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const Popup: React.FC<{ item: string }> = ({ item }) => {
    return (
      <div className="popup-container">
        <div className="popup">
          <h3>{item}</h3>
          {}
        </div>
      </div>
    );
  };

  return (
    <footer id="footer">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <div>
              <Link to="/">
                <img className="logo" src="/images/logo.png" alt="Logo" />
              </Link>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div>
              <h5 className="font-weight-bold">HOUSE OF OUTON</h5>
              <ul className="list-unstyled">
                <li onClick={() => handleItemClick('Our Story')}>
                  <span className="clickable">Our Story</span>
                </li>
                <li onClick={() => handleItemClick('Our Material')}>
                  <span className="clickable">Our Material</span>
                </li>
                <li onClick={() => handleItemClick('Transparency')}>
                  <span className="clickable">Transparency</span>
                </li>
                <li onClick={() => handleItemClick('Our Stores')}>
                  <span className="clickable">Our Stores</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div>
              <h5 className="font-weight-bold">CUSTOMER CARE</h5>
              <ul className="list-unstyled">
                <li onClick={() => handleItemClick('Delivery and Returns')}>
                  <span className="clickable">Delivery and Returns</span>
                </li>
                <li onClick={() => handleItemClick('FAQ')}>
                  <span className="clickable">FAQ</span>
                </li>
                <li onClick={() => handleItemClick('Terms & Conditions')}>
                  <span className="clickable">Terms & Conditions</span>
                </li>
                <li onClick={() => handleItemClick('Contact Us')}>
                  <span className="clickable">Contact Us</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div>
              <h5 className="font-weight-bold">NEWSLETTER</h5>
              <div className="subscribe-container">
                <div className="subscribe-input">
                  <input
                    type="text"
                    placeholder="E-mail"
                    className="email-input"
                  />
                  <span className="subscribe-link">Subscribe</span>
                </div>
                <div className="subscribe-line"></div>
              </div>

              <div className="social-icons">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-pinterest"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {selectedItem && <Popup item={selectedItem} />}
    </footer>
  );
};

export default Footer;
