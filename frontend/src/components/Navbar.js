import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/Navbar.css';
import { useState, useEffect } from 'react';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
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
    return (_jsx("header", { children: _jsxs("nav", { children: [screenWidth <= 810 ? (_jsxs("div", Object.assign({ className: "navbar-container" }, { children: [_jsx("div", Object.assign({ className: "nav-logo-box" }, { children: _jsx(Link, Object.assign({ to: "/" }, { children: _jsx("img", { className: "nav-logo", src: Logo, alt: "Logo" }) })) })), _jsxs("div", Object.assign({ className: `hamburger-menu ${isMenuOpen ? 'active' : ''}`, onClick: toggleMenu }, { children: [_jsx("div", { className: "bar" }), _jsx("div", { className: "bar" }), _jsx("div", { className: "bar" })] })), _jsx("div", Object.assign({ className: "icon-links-box" }, { children: _jsxs("ul", Object.assign({ className: "icons-ul" }, { children: [_jsx("li", Object.assign({ className: "nav-icons-li" }, { children: _jsx("img", { className: "nav-icons search", src: Search, alt: "Search" }) })), _jsx("li", Object.assign({ className: "nav-icons-li" }, { children: _jsx(Link, Object.assign({ to: "/Product-details" }, { children: _jsx("img", { className: "nav-icons shoppingbag", src: Shoppingbag, alt: "Shoppingbag" }) })) }))] })) }))] }))) : (_jsxs("div", Object.assign({ className: "navbar-container" }, { children: [_jsx("div", Object.assign({ className: "nav-logo-box" }, { children: _jsx(Link, Object.assign({ to: "/" }, { children: _jsx("img", { className: "nav-logo", src: Logo, alt: "Logo" }) })) })), _jsxs("div", Object.assign({ className: "nav-links-container" }, { children: [_jsx("div", Object.assign({ className: "text-links-box" }, { children: _jsxs("ul", Object.assign({ className: "nav-links" }, { children: [_jsx("li", Object.assign({ className: "news" }, { children: _jsx(Link, Object.assign({ to: "/" }, { children: "News" })) })), _jsx("li", Object.assign({ className: "nav-link-text" }, { children: _jsx(Link, Object.assign({ to: "/All-sunglasses" }, { children: "All sunglasses" })) })), _jsx("li", Object.assign({ className: "nav-link-text" }, { children: _jsx(Link, Object.assign({ to: "/about" }, { children: "House of OutOn" })) }))] })) })), _jsx("div", Object.assign({ className: "icon-links-box" }, { children: _jsxs("ul", Object.assign({ className: "icons-ul" }, { children: [_jsx("li", Object.assign({ className: "nav-icons-li" }, { children: _jsx("img", { className: "nav-icons search", src: Search, alt: "Search" }) })), _jsx("li", Object.assign({ className: "nav-icons-li" }, { children: _jsx(Link, Object.assign({ to: "/Product-details" }, { children: _jsx("img", { className: "nav-icons shoppingbag", src: Shoppingbag, alt: "Shoppingbag" }) })) }))] })) }))] }))] }))), isMenuOpen && (_jsx("div", Object.assign({ className: "slide-in-menu" }, { children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, Object.assign({ to: "/" }, { children: "News" })) }), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/All-sunglasses" }, { children: "All sunglasses" })) }), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/about" }, { children: "House of OutOn" })) })] }) })))] }) }));
}
export default Navbar;
//# sourceMappingURL=Navbar.js.map