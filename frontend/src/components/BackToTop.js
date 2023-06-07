import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import arrow from '../images/arrow-up.png';
import '../styles/BackToTop.css';
function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollTop > window.innerHeight / 2);
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (_jsx("div", Object.assign({ className: "back-to-top" }, { children: _jsx("div", Object.assign({ className: `back-to-top-button ${isVisible ? 'visible' : ''}`, onClick: scrollToTop }, { children: _jsx("img", { className: "back-to-top-img", src: arrow, alt: "" }) })) })));
}
export default BackToTop;
//# sourceMappingURL=BackToTop.js.map