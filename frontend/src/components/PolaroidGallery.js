import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
// import { FaHeart } from 'react-icons/fa';
import '../styles/PolaroidGallery.css';
import Heart from '../images/heart-empty.png';
import HeartFill from '../images/heart-fill.png';
import logo from '../images/logo.png';
import photo1 from '../images/polaroid-manhattanmoon-purple-black-above-smile.jpeg';
import photo2 from '../images/polaroid-manhattanmoon-purple-black-right-below.jpeg';
import photo3 from '../images/polaroid-manhattanmoon-purple-black-left.jpeg';
import photo4 from '../images/polaroid-manhattanmoon-purple-black-front.jpeg';
import photo5 from '../images/polaroid-riorush-brownsmoke-brown-front-bokeh.jpeg';
import photo6 from '../images/polaroid-riorush-brownsmoke-brown-front-tilt.jpeg';
import photo7 from '../images/polaroid-riorush-brownsmoke-brown-left.jpeg';
import photo8 from '../images/polaroid-riorush-brownsmoke-brown-front-bokeh.jpeg';
import photo9 from '../images/polaroid-riorush-greysmoke-grey-front-cute.jpeg';
import photo10 from '../images/polaroid-riorush-greysmoke-grey-front.jpeg';
import photo11 from '../images/polaroid-riorush-greysmoke-grey-left.jpeg';
import photo12 from '../images/polaroid-riorush-greysmoke-grey-right-smile.jpeg';
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
    ];
    const [selectedFavorites, setSelectedFavorites] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [showBagPopup, setShowBagPopup] = useState(false);
    const handleSelect = (index) => {
        const isSelected = selectedFavorites.includes(index);
        if (isSelected) {
            setSelectedFavorites(selectedFavorites.filter((fav) => fav !== index));
        }
        else {
            setSelectedFavorites([...selectedFavorites, index]);
        }
    };
    const handleSendMyFaves = () => {
        if (selectedFavorites.length > 0) {
            setSelectedFavorites([]);
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
        }
        else {
            setShowPopup(false);
        }
    };
    const handleGetMyShades = () => {
        setShowBagPopup(true);
        setTimeout(() => {
            setShowBagPopup(false);
        }, 3000);
    };
    return (_jsxs("div", { children: [_jsx("div", Object.assign({ className: "polaroid-contaiiner" }, { children: images.map((image, index) => (_jsxs("div", Object.assign({ className: "polaroiid-item" }, { children: [_jsx("img", { className: "img-polaroid", src: image, alt: `Photo ${index + 1}` }), _jsx("div", Object.assign({ onClick: () => handleSelect(index) }, { children: selectedFavorites.includes(index) ? (_jsx("img", { className: "heart", src: HeartFill, alt: "Empty Heart" })) : (_jsx("img", { className: "heart", src: Heart, alt: "Filled Heart" })) })), _jsxs("div", Object.assign({ className: "teext-contaiiner" }, { children: [_jsx("div", Object.assign({ className: "logoo-container" }, { children: _jsx("img", { src: logo, alt: "Logo" }) })), _jsx("div", Object.assign({ className: "product-name" }, { children: "The Sydney Splendour" }))] }))] }), index))) })), _jsxs("div", Object.assign({ className: "button-container-p" }, { children: [_jsx("div", Object.assign({ className: "button6 yellow-hover send-button" }, { children: _jsxs("div", Object.assign({ className: "see-more1", onClick: handleSendMyFaves }, { children: ["Email me my", ' ', _jsx("img", { className: "heart-email", src: HeartFill, alt: "Empty Heart" })] })) })), _jsx("div", Object.assign({ className: "button-get-shades yellow-hover send-button" }, { children: _jsx("div", Object.assign({ className: "button-get-shades-inner", onClick: handleGetMyShades }, { children: "Get my shades" })) })), showPopup && _jsx("div", Object.assign({ className: "popup" }, { children: "Your photos have been sent!" })), showBagPopup && _jsx("div", Object.assign({ className: "popup" }, { children: "Added to bag!" }))] })), _jsx("style", { children: `
  .logoo-container {
    position: absolute;
    top: 40%;
    left: 0;
    transform: translateY(-50%);
    width: 34px;
    height: 24px;
  }


    .logoo-container img {
      width: 100%;
      height: 100%;

    }


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

          }

          .polaroiid-item .img-polaroid {
            width: 100%;
            height: 100%;
            object-fit: cover;


          }

          .teext-contaiiner {
            position: absolute;
            width: 218px;
            height: 57.15px;
            bottom: 0;
            left: 0;
            background: #FFFFFF;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 10px;
            box-shadow: 0px 23px 14px rgba(100, 50, 0, 0.02), 0px 10px 10px rgba(100, 50, 0, 0.03), 0px 3px 6px rgba(100, 50, 0, 0.03), 0px 0px 0px rgba(100, 50, 0, 0.03);
          }

          .product-name {
            text-align: right;
            padding-left: 35px; /* Justera detta värde för önskat avstånd från vänsterkanten */
          }

          .text-field {
            width: 100%;
            height: 100%;
          }
        ` })] }));
};
export default PolaroidGallery;
//# sourceMappingURL=PolaroidGallery.js.map