import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
function WebcamImage() {
    const [img, setImg] = useState(null);
    const [cameraOn, setCameraOn] = useState(true);
    const webcamRef = useRef(null);
    const videoConstraints = {
        width: 240,
        height: 320,
        facingMode: 'user',
    };
    const toggleCamera = () => {
        setCameraOn((prevCameraOn) => !prevCameraOn);
    };
    const capture = useCallback(() => {
        var _a;
        const imageSrc = (_a = webcamRef.current) === null || _a === void 0 ? void 0 : _a.getScreenshot();
        setImg(imageSrc || null);
    }, []);
    return (_jsxs("div", Object.assign({ className: "Container" }, { children: [cameraOn && (_jsxs(_Fragment, { children: [_jsx(Webcam, { audio: false, mirrored: true, width: 440, height: 440, ref: webcamRef, screenshotFormat: "image/jpeg", videoConstraints: videoConstraints }), _jsx("button", Object.assign({ onClick: capture }, { children: "Capture photo" }))] })), _jsx("button", Object.assign({ onClick: toggleCamera }, { children: cameraOn ? 'Turn Off Camera' : 'Turn On Camera' })), img !== null && (_jsxs(_Fragment, { children: [_jsx("img", { src: img, alt: "screenshot" }), _jsx("button", Object.assign({ onClick: () => setImg(null) }, { children: "Retake" }))] }))] })));
}
export default WebcamImage;
//# sourceMappingURL=Screenshot.js.map