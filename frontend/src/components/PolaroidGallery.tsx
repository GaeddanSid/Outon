import React from 'react';
import '../styles/Phone.css';
import logo from '../images/logo.png';
// Importera dina egna foton
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

  return (
    <div>
      <div className="polaroid-contaiiner">
        {images.map((image, index) => (
          <div className="polaroiid-item" key={index}>
            <img src={image} alt={`Photo ${index + 1}`} />
            <div className="teext-contaiiner">
              <div className="logoo-container">
                <img src={logo} alt="Logo" />
              </div>
              <div className="product-name">The Sydney Splendour</div>
              {/* <div className="text-field"></div> */}
            </div>
          </div>
        ))}
        <div>
          <button id="sendButton">Send Favorites</button>
        </div>
        <div id="popup">Your photos have been sent!</div>
      </div>
      <style>
        {`
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

          .polaroiid-item img {
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
        `}
      </style>
    </div>
  );
};

export default PolaroidGallery;
