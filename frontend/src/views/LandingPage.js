import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import SmallFeatures from '../components/SmallFeatures';
import SmFeatures from '../components/SmFeatures2';
import BackToTop from '../components/BackToTop';
import About from '../components/About';
import Productcarousel from '../components/Productcarousel';
import Productcarousel2 from '../components/Recommended';
import Couple from '../images/tryon-start-block.png';
import Stylefeed from '../components/StyleFeed';
import Vogue from '../images/Vogue.png';
import Time from '../images/Time.png';
import Elle from '../images/Elle.png';
import Forbes from '../images/Forbes.png';
import Bazaar from '../images/Bazaar.png';
import Cosmo from '../images/cosmo.png';
import { useState } from 'react';
const defaultProduct = {
    id: 6,
    name: 'Berlin Beat',
    type: '',
    price: 170,
    size: 'S/M',
    color: 'Shell/Tan smoke',
    description: 'A frame with a classic character that suits your everyday style. Made with 100% Portuguese acetate. Available in x different colors and two different sizes.',
    details: '',
    image: 'Product_Berlin1.png',
    image2: 'Product_Berlin2.png',
    image3: 'Product_Berlin3.png',
};
function landingpage() {
    const [selectedProduct, setSelectedProduct] = useState(defaultProduct);
    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };
    return (_jsxs("div", Object.assign({ className: "view-divs" }, { children: [_jsxs("div", Object.assign({ className: "hero-section" }, { children: [_jsx("div", Object.assign({ className: "hero-pic" }, { children: _jsxs("div", Object.assign({ className: "slogan" }, { children: [_jsx("p", { children: "SUN'S OUT" }), _jsx("p", { children: "SHADES ON" })] })) })), _jsxs("div", Object.assign({ className: "hero-text-parent" }, { children: [_jsxs("div", Object.assign({ className: "hero-text-container" }, { children: [_jsx("p", Object.assign({ className: "hero-text" }, { children: "Elevate your style game with our exclusively refined and sustainable sunglasses, carefully handcrafted with scratch-resistant glass." })), _jsx("p", Object.assign({ className: "hero-text" }, { children: "Discover timeless luxury and sustainability today." }))] })), _jsx("div", Object.assign({ className: "button-hero yellow-hover" }, { children: _jsx(Link, Object.assign({ to: "/All-sunglasses" }, { children: _jsx("div", Object.assign({ className: "shop-the-collection" }, { children: "Shop the collection" })) })) }))] }))] })), _jsxs("div", Object.assign({ className: "brands" }, { children: [_jsx("div", Object.assign({ className: "brand-names" }, { children: _jsx("img", { src: Vogue, alt: "Vogue" }) })), _jsx("div", Object.assign({ className: "brand-names" }, { children: _jsx("img", { src: Elle, alt: "Elle" }) })), _jsx("div", Object.assign({ className: "brand-names" }, { children: _jsx("img", { src: Forbes, alt: "Forbes" }) })), _jsx("div", Object.assign({ className: "brand-names" }, { children: _jsx("img", { src: Bazaar, alt: "Bazaar" }) })), _jsx("div", Object.assign({ className: "brand-names" }, { children: _jsx("img", { src: Cosmo, alt: "Cosmopolitan" }) })), _jsx("div", Object.assign({ className: "brand-names" }, { children: _jsx("img", { src: Time, alt: "Time" }) }))] })), _jsxs("div", Object.assign({ className: "try-on-start-block" }, { children: [_jsxs("div", Object.assign({ className: "try-on-start-text" }, { children: [_jsxs("div", Object.assign({ className: "try-on-text-inner" }, { children: [_jsx("p", Object.assign({ className: "our-virtual" }, { children: "OUR VIRTUAL TRY-ON!" })), _jsxs("div", Object.assign({ className: "small-text-try-on" }, { children: [_jsx("p", Object.assign({ className: "elevate" }, { children: "Elevate your style game with Outon's exclusively refined and sustainable sunglasses. Carefully handcrafted with scratch-resistant glass." })), _jsx("p", Object.assign({ className: "elevate" }, { children: "Discover timeless luxury and sustainability today!" }))] }))] })), _jsx(Link, Object.assign({ to: "/All-sunglasses" }, { children: _jsx("div", Object.assign({ className: "button4" }, { children: _jsx("div", Object.assign({ className: "button5 yellow-hover" }, { children: _jsx("div", Object.assign({ className: "see-more" }, { children: "Try it now" })) })) })) }))] })), _jsx("div", Object.assign({ className: "try-on-start-pic" }, { children: _jsx("img", { className: "couple-try-on", src: Couple, alt: "try-on-couple" }) }))] })), _jsx(SmallFeatures, {}), _jsx(Productcarousel, { onProductClick: handleProductClick }), _jsx("div", Object.assign({ id: "about" }, { children: _jsx(About, {}) })), _jsx(SmFeatures, {}), _jsx(Productcarousel2, { onProductClick: handleProductClick }), _jsx(Stylefeed, {}), _jsx(BackToTop, {})] })));
}
export default landingpage;
//# sourceMappingURL=LandingPage.js.map