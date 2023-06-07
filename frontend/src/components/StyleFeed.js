import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import '../styles/StyleFeed.css';
import StyleFeedCatEye from '../images/Stylefeed_cateye.jpg';
import StyleFeedShade from '../images/Stylefeed_Shade.jpg';
import StyleFeedMany from '../images/Stylefeed_many.jpg';
import StyleFeedStuff from '../images/Stylefeed_stuff.jpg';
import StyleFeedRound from '../images/Stylefeed_round.jpg';
import StyleFeedFashion from '../images/Stylefeed_fashion.jpg';
import StyleFeedPlastic from '../images/Stylefeed_plastic.jpg';
import StyleFeedMen from '../images/Stylefeed_men.jpg';
import StyleFeedBirds from '../images/Stylefeed_birds.jpg';
import StyleFeedChair from '../images/Stylefeed_chair.jpg';
import StyleFeedPlant from '../images/Stylefeed_plant.jpg';
import { useState, useEffect } from 'react';
const StyleFeed = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1180);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (_jsxs(_Fragment, { children: [!isMobile && (_jsx("div", Object.assign({ className: "style-feed-section-inner" }, { children: _jsx("div", Object.assign({ className: "frame-wrapper2" }, { children: _jsx("div", Object.assign({ className: "style-feed-wrapper" }, { children: _jsxs("div", Object.assign({ className: "style-feed" }, { children: [_jsx("div", Object.assign({ className: "style-feed1" }, { children: "STYLE FEED" })), _jsxs("div", Object.assign({ className: "frame-parent12" }, { children: [_jsxs("div", Object.assign({ className: "frame-parent13" }, { children: [_jsx("img", { className: "frame-child5 hover-effect", alt: "", src: StyleFeedStuff }), _jsx("div", Object.assign({ className: "frame-wrapper3" }, { children: _jsx("img", { className: "frame-child6 hover-effect", alt: "", src: StyleFeedShade }) })), _jsx("img", { className: "frame-child7 hover-effect", alt: "", src: StyleFeedCatEye }), _jsx("img", { className: "skarmavbild-2023-05-19-kl-08 hover-effect", alt: "", src: StyleFeedMany })] })), _jsxs("div", Object.assign({ className: "frame-parent14" }, { children: [_jsxs("div", Object.assign({ className: "frame-parent12" }, { children: [_jsx("img", { className: "frame-child8 hover-effect", alt: "", src: StyleFeedChair }), _jsx("img", { className: "frame-child8 hover-effect", alt: "", src: StyleFeedPlant })] })), _jsx("img", { className: "frame-child10 hover-effect", alt: "", src: StyleFeedBirds }), _jsxs("div", Object.assign({ className: "frame-parent12" }, { children: [_jsx("img", { className: "frame-child8 hover-effect", alt: "", src: StyleFeedFashion }), _jsx("img", { className: "frame-child8 hover-effect", alt: "", src: StyleFeedMen })] })), _jsxs("div", Object.assign({ className: "frame-parent12" }, { children: [_jsx("img", { className: "frame-child8 hover-effect", alt: "", src: StyleFeedRound }), _jsx("img", { className: "frame-child8 hover-effect", alt: "", src: StyleFeedPlastic })] }))] }))] })), _jsx("div", Object.assign({ className: "button6 yellow-hover" }, { children: _jsx("div", Object.assign({ className: "see-more1 " }, { children: "See more" })) }))] })) })) })) }))), isMobile && (_jsx("div", Object.assign({ className: "style-feed-section-inner-mobile" }, { children: _jsx("div", Object.assign({ className: "frame-wrapper-mobile" }, { children: _jsx("div", Object.assign({ className: "style-feed-wrapper-mobile" }, { children: _jsxs("div", Object.assign({ className: "style-feed-mobile" }, { children: [_jsx("div", Object.assign({ className: "style-feed1-mobile" }, { children: "STYLE FEED" })), _jsxs("div", Object.assign({ className: "style-feed-grid-mobile" }, { children: [_jsx("img", { className: "frame-child5-mobile hover-effect-style", alt: "", src: StyleFeedCatEye }), _jsx("img", { className: "frame-child6-mobile hover-effect-style", alt: "", src: StyleFeedFashion }), _jsx("img", { className: "frame-child7-mobile hover-effect-style", alt: "", src: StyleFeedShade }), _jsx("img", { className: "stylefeedMany-mobile hover-effect-style", alt: "", src: StyleFeedChair }), _jsx("img", { className: "frame-child8-mobile hover-effect-style", alt: "", src: StyleFeedPlant }), _jsx("img", { className: "frame-child8-mobile hover-effect-style", alt: "", src: StyleFeedBirds }), _jsx("img", { className: "frame-child10-mobile hover-effect-style", alt: "", src: StyleFeedRound }), _jsx("img", { className: "frame-child8-mobile hover-effect-style", alt: "", src: StyleFeedMany }), _jsx("img", { className: "frame-child8-mobile hover-effect-style", alt: "", src: StyleFeedMen }), _jsx("img", { className: "frame-child8-mobile hover-effect-style", alt: "", src: StyleFeedRound }), _jsx("img", { className: "frame-child8-mobile hover-effect-style", alt: "", src: StyleFeedPlastic })] })), _jsx("div", Object.assign({ className: "button6 yellow-hover" }, { children: _jsx("div", Object.assign({ className: "see-more1" }, { children: "See more" })) }))] })) })) })) })))] }));
};
export default StyleFeed;
//# sourceMappingURL=StyleFeed.js.map