import { jsx as _jsx } from "react/jsx-runtime";
import Webcam from 'react-webcam';
const videoConstraints = {
    width: { min: 480 },
    height: { min: 820 },
    facingMode: 'user',
};
function Camera() {
    return (_jsx("div", Object.assign({ className: "camera" }, { children: _jsx(Webcam, { imageSmoothing: true, screenshotFormat: "image/webp", mirrored: true, 
            // width={480}
            // height={920}
            videoConstraints: videoConstraints }) })));
}
export default Camera;
//# sourceMappingURL=Camera.js.map