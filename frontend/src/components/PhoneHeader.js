import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import photo1 from '../images/polaroid-manhattanmoon-purple-black-above-smile.jpeg';
import WebcamImage from '../components/Screenshot';
import { FiCameraOff } from 'react-icons/fi';
import { BiPowerOff } from 'react-icons/bi';
import '../styles/Phone.css';
import { Camera, PersonCheck, Trash, BootstrapReboot, } from 'react-bootstrap-icons';
const PhoneHeader = () => {
    const [showButtons, setShowButtons] = useState(false);
    const [isCameraOn, setIsCameraOn] = useState(false);
    const handleCameraButtonClick = () => {
        setShowButtons(!showButtons);
        setIsCameraOn((prevIsCameraOn) => !prevIsCameraOn);
    };
    // const toggleCamera = () => {
    //   setIsCameraOn((previsCameraOn) => !previsCameraOn);
    // };
    return (_jsxs("div", Object.assign({ className: "container" }, { children: [_jsxs("div", Object.assign({ className: "phone" }, { children: [_jsxs("div", Object.assign({ className: "screen" }, { children: [_jsxs("div", Object.assign({ className: "carousel-container" }, { children: [!isCameraOn && (_jsx("img", { src: photo1, alt: "Phone Screen", className: "phone-screen" })), isCameraOn && _jsx(WebcamImage, {}), " "] })), _jsx("div", Object.assign({ className: `hidden-box ${showButtons ? 'show' : ''}` }, { children: _jsx("div", { className: "hidden-content" }) }))] })), _jsx("div", Object.assign({ className: "buttons" }, { children: _jsxs("div", Object.assign({ className: `half-circle ${showButtons ? 'show' : ''}` }, { children: [_jsx("div", Object.assign({ className: "round-button retake-icon" }, { children: _jsx(BootstrapReboot, {}) })), _jsx("div", Object.assign({ className: "round-button person-icon" }, { children: _jsx(PersonCheck, {}) })), _jsx("div", Object.assign({ className: "round-button trash-icon" }, { children: _jsx(Trash, {}) }))] })) })), _jsx("div", Object.assign({ className: "camera-button" }, { children: _jsx(Camera, { size: 24 }) })), _jsx("div", Object.assign({ className: "on-off-container" }, { children: _jsx("div", Object.assign({ className: "on-off", onClick: handleCameraButtonClick }, { children: isCameraOn ? _jsx(FiCameraOff, {}) : _jsx(BiPowerOff, { size: 32 }) })) }))] })), _jsxs("div", Object.assign({ className: "text-container" }, { children: [_jsx("h1", Object.assign({ className: "heading-text" }, { children: "Try them before you buy them!" })), _jsxs("div", Object.assign({ className: "beeauty-teext" }, { children: [_jsx("p", Object.assign({ className: "beeauty-line" }, { children: "Beauty is in the eye of the beholder or as we like to say, OutOn the eyes of the beholder!" })), _jsx("p", Object.assign({ className: "beeauty-line" }, { children: "Style yourself like the gorgeous sunshine cosmonaut that you are!" }))] })), _jsxs("div", Object.assign({ className: "circle-row" }, { children: [_jsx("div", Object.assign({ className: "circle circle-selfie", style: { backgroundColor: '#eee565' } }, { children: _jsx("p", Object.assign({ className: "circle-info-text" }, { children: "Selfie time" })) })), _jsx("div", Object.assign({ className: "circle circle-shades", style: { backgroundColor: '#EBE6E0' } }, { children: _jsx("p", Object.assign({ className: "circle-info-text" }, { children: " Select shades" })) }))] })), _jsxs("div", Object.assign({ className: "circle-row" }, { children: [_jsx("div", Object.assign({ className: "circle circle-shot", style: { backgroundColor: '#9DACAA' } }, { children: _jsx("p", Object.assign({ className: "circle-info-text" }, { children: " Snap a shot" })) })), _jsx("div", Object.assign({ className: "circle circle-inbox", style: { backgroundColor: '#9F8EA2' } }, { children: _jsx("p", Object.assign({ className: "circle-info-text" }, { children: " Send to inbox" })) }))] }))] }))] })));
};
export default PhoneHeader;
//# sourceMappingURL=PhoneHeader.js.map