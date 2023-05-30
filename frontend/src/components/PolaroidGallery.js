import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/Phone.css';
import logo from '../images/logo.png';
// Importera dina egna foton
import photo1 from '../images/polaroid-manhattanmoon-purple-black-above-smile.jpeg';
import photo2 from '../images/polaroid-riorush-brownsmoke-brown-front-bokeh.jpeg';
import photo3 from '../images/polaroid-riorush-greysmoke-grey-above.jpeg';
import photo4 from '../images/polaroid-riorush-greysmoke-grey-front.jpeg'; // Lägg till den fjärde bilden här
import photo5 from '../images/polaroid-riorush-greysmoke-grey-left.jpeg'; // Lägg till den fjärde bilden här
import photo6 from '../images/polaroid-riorush-greysmoke-grey-right-smile.jpeg'; // Lägg till den fjärde bilden här
import photo7 from '../images/polaroid-riorush-greysmoke-grey-right-smile.jpeg'; // Lägg till den fjärde bilden här
import photo8 from '../images/polaroid-riorush-greysmoke-grey-below.jpeg'; // Lägg till den fjärde bilden här
import photo9 from '../images/polaroid-riorush-greysmoke-grey-below.jpeg'; // Lägg till den fjärde bilden här
import photo10 from '../images/polaroid-riorush-greysmoke-grey-below.jpeg'; // Lägg till den fjärde bilden här
import photo11 from '../images/polaroid-riorush-greysmoke-grey-below.jpeg'; // Lägg till den fjärde bilden här
import photo12 from '../images/polaroid-riorush-greysmoke-grey-below.jpeg'; // Lägg till den fjärde bilden här
const PolaroidGallery = () => {
    const images = [
        photo1,
        photo2,
        photo3,
        photo4,
        photo5,
        photo6,
        photo7,
        photo8,
        photo9,
        photo10,
        photo11,
        photo12,
    ]; // Uppdatera arrayen med den fjärde bilden
    return (_jsxs("div", Object.assign({ className: "polaroid-contaiiner" }, { children: [images.map((image, index) => (_jsxs("div", Object.assign({ className: "polaroiid-item" }, { children: [_jsx("img", { src: image, alt: `Photo ${index + 1}` }), _jsxs("div", Object.assign({ className: "teext-contaiiner" }, { children: [_jsx("div", Object.assign({ className: "logoo-container" }, { children: _jsx("img", { src: logo, alt: "Logo" }) })), _jsx("div", Object.assign({ className: "product-name" }, { children: "The Sydney Splendour" })), _jsx("div", { className: "text-field" })] }))] }), index))), _jsx("style", { children: `
          .polaroid-contaiiner {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            justify-items: center;
            max-width: 960px;
            margin: 0 auto;
            grid-row-gap: 30px;
            border: 10.2882px solid #FFFFFF;

          }

          .polaroiid-item {
            width: 233.2px;
            height: 236.6px;
            padding: 10.3px;
            background: #d9d9d9;
            position: relative;
            border: 10.2882px solid #FFFFFF;
            box-shadow: 0px 23px 14px rgba(100, 50, 0, 0.02), 0px 10px 10px rgba(100, 50, 0, 0.03), 0px 3px 6px rgba(100, 50, 0, 0.03), 0px 0px 0px rgba(100, 50, 0, 0.03);
          }

          .polaroiid-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            background: #D9D9D9;
            box-shadow: 0px 27.2276px 7.77931px rgba(0, 0, 0, 0.01), 0px 17.5034px 7.13103px rgba(0, 0, 0, 0.09), 0px 9.72414px 5.83448px rgba(0, 0, 0, 0.3), 0px 4.53793px 4.53793px rgba(0, 0, 0, 0.51), 0px 1.29655px 2.5931px rgba(0, 0, 0, 0.59), 0px 0px 0px rgba(0, 0, 0, 0.6);
          }

          .teext-contaiiner {
            position: absolute;
            width: 233.2px;
            height: 57.15px;
            bottom: 0;
            left: 0;
            background: #FFFFFF;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 10px;
          }

          .logoo-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 34px;
            height: 24px;
            padding: 5px;
          }

          .logoo-container img {
            position: absolute;
            left: 2.8%;
            right: 24.16%;
            top: 42.35%;
            bottom: 0.12%;
          }

          .product-name {
            text-align: right;
            padding-left: 35px; /* Justera detta värde för önskat avstånd från vänsterkanten */
          }

          .text-field {
            width: 100%;
            height: 100%;
          }
        ` })] })));
};
export default PolaroidGallery;
//# sourceMappingURL=PolaroidGallery.js.map