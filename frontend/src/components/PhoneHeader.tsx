import React, { useState } from 'react';
import PolaroidGallery from './PolaroidGallery';
import photo1 from '../images/polaroid-manhattanmoon-purple-black-above-smile.jpeg';
import WebcamImage from '../components/Screenshot';
import '../styles/Phone.css';
import { Camera, Reply, Person, Trash } from 'react-bootstrap-icons';

const PhoneHeader = () => {
  const [showButtons, setShowButtons] = useState(false);

  const handleCameraButtonClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="container">
      <div className="phone">
        <div className="screen">
          <div className="carousel-container">
            <WebcamImage />
            {/* <img src={photo1} alt="Phone Screen" className="phone-screen" />
            <PolaroidGallery /> */}
          </div>

          <div className={`hidden-box ${showButtons ? 'show' : ''}`}>
            <div className="hidden-content">{/* Phone content */}</div>
          </div>
        </div>

        <div className="buttons">
          <div className={`half-circle ${showButtons ? 'show' : ''}`}>
            <div className="round-button">
              <Reply />
            </div>
            <div className="round-button">
              <Person />
            </div>
            <div className="round-button">
              <Trash />
            </div>
          </div>
          <div className="camera-button" onClick={handleCameraButtonClick}>
            <Camera size={24} />
          </div>
        </div>
      </div>

      <div className="text-container">
        <h1 className="heading-text">Try it before you buy it!</h1>
        <div className="beeauty-teext">
          <p className="beeauty-line">
            Beauty is in the eye of the beholder or as we like to say, OutOn the
            eyes of the beholder! Style yourself like the gorgeous sunshine
            cosmonaut that you are!
          </p>
        </div>

        <div className="circle-row">
          <div
            className="circle circle-selfie"
            style={{ backgroundColor: '#eee565' }}
          >
            Selfie time
          </div>
          <div
            className="circle circle-shades"
            style={{ backgroundColor: '#b68657' }}
          >
            Select shades
          </div>
        </div>
        <div className="circle-row">
          <div
            className="circle circle-shot"
            style={{ backgroundColor: '#9dacaa' }}
          >
            Snap a shot
          </div>
          <div
            className="circle circle-inbox"
            style={{ backgroundColor: '#9f8ea2' }}
          >
            Send to inbox
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneHeader;
