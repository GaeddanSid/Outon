import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-modal';
import '../styles/Footer.css';
import Tab from 'react-bootstrap/Tab';
import logo from '../images/logo.png';
const Footer = () => {
    const [email, setEmail] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [invalidEmailFormat, setInvalidEmailFormat] = useState(false);
    const handleEmailChange = (e) => {
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
    return (_jsxs("footer", Object.assign({ className: "footer" }, { children: [_jsx(Tab.Container, { children: _jsxs(Row, { children: [_jsx(Col, Object.assign({ xs: 12, sm: 6, md: 3 }, { children: _jsx("div", { children: _jsx(Link, Object.assign({ to: "/" }, { children: _jsx("img", { className: "logo", src: logo, alt: "Logo" }) })) }) })), _jsx(Col, Object.assign({ xs: 12, sm: 6, md: 3 }, { children: _jsxs("div", { children: [_jsx("h5", Object.assign({ className: "font-weight-bold" }, { children: "HOUSE OF OUTON" })), _jsxs("ul", Object.assign({ className: "list-unstyled" }, { children: [_jsx("li", { children: _jsx(Link, Object.assign({ to: "/" }, { children: "Our Story" })) }), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/" }, { children: "Our Material" })) }), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/" }, { children: "Transparency" })) }), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/" }, { children: "Our Stores" })) })] }))] }) })), _jsx(Col, Object.assign({ xs: 12, sm: 6, md: 3 }, { children: _jsxs("div", { children: [_jsx("h5", Object.assign({ className: "font-weight-bold" }, { children: "CUSTOMER CARE" })), _jsxs("ul", Object.assign({ className: "list-unstyled" }, { children: [_jsx("li", { children: _jsx(Link, Object.assign({ to: "/" }, { children: "Delivery and Returns" })) }), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/" }, { children: "FAQ" })) }), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/" }, { children: "Terms & Conditions" })) }), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/" }, { children: "Contact Us" })) })] }))] }) })), _jsx(Col, Object.assign({ xs: 12, sm: 6, md: 3 }, { children: _jsxs("div", { children: [_jsx("h5", Object.assign({ className: "font-weight-bold" }, { children: "NEWSLETTER" })), _jsxs("div", Object.assign({ className: "subscribe-container" }, { children: [_jsx("div", Object.assign({ className: "subscribe-input" }, { children: _jsxs("div", Object.assign({ className: "input-group" }, { children: [_jsx("input", { type: "text", placeholder: "E-mail", className: `email-input form-control ${invalidEmailFormat ? 'is-invalid' : ''}`, value: email, onChange: handleEmailChange }), _jsx("div", Object.assign({ className: "input-group-append" }, { children: _jsx("span", Object.assign({ className: "subscribe-link", onClick: handleSubscribe }, { children: "Subscribe" })) })), invalidEmailFormat && (_jsx("div", Object.assign({ className: "invalid-feedback" }, { children: "Invalid email format" })))] })) })), _jsx("div", { className: "subscribe-line" })] })), _jsxs("div", Object.assign({ className: "social-icons" }, { children: [_jsx("a", Object.assign({ href: "https://www.facebook.com/", target: "_blank", rel: "noopener noreferrer" }, { children: _jsx("i", { className: "bi bi-facebook" }) })), _jsx("a", Object.assign({ href: "https://www.instagram.com/", target: "_blank", rel: "noopener noreferrer" }, { children: _jsx("i", { className: "bi bi-instagram" }) })), _jsx("a", Object.assign({ href: "https://www.twitter.com/", target: "_blank", rel: "noopener noreferrer" }, { children: _jsx("i", { className: "bi bi-twitter" }) })), _jsx("a", Object.assign({ href: "https://www.tiktok.com/", target: "_blank", rel: "noopener noreferrer" }, { children: _jsx("i", { className: "bi bi-tiktok" }) }))] }))] }) }))] }) }), _jsxs(Modal, Object.assign({ isOpen: showPopup, onRequestClose: handleClosePopup, contentLabel: "Subscribe Popup", className: "subscribe-popup", overlayClassName: "subscribe-popup-overlay" }, { children: [_jsx("h3", { children: "Thank you for subscribing!" }), _jsx("button", Object.assign({ onClick: handleClosePopup }, { children: "Close" }))] })), _jsx("div", { className: "footer-line" }), _jsx("div", Object.assign({ className: "footer-container" }, { children: _jsx("span", Object.assign({ className: "footer-text" }, { children: "\u00A9 2023 Outon company, all rights reserved" })) }))] })));
};
export default Footer;
//# sourceMappingURL=Footer.js.map