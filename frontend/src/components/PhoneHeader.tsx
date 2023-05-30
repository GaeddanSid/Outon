import React, { useState } from 'react';

import WebcamImage from '../components/Screenshot';
import '../styles/Phone.css';
import { Camera, Person, Trash } from 'react-bootstrap-icons';

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
              <i className="bi bi-bootstrap-reboot"></i>
            </div>
            <div className="round-button person-icon">
              <Person />
            </div>
            <div className="round-button">
              <Trash />
            </div>
          </div>
        </div>
        <div className="camera-button" onClick={handleCameraButtonClick}>
          <Camera size={24} />
        </div>
      </div>
      <div className="text-container">
        <h1 className="heading-text">Try them before you buy them!</h1>
        <div className="beeauty-teext">
          <p className="beeauty-line">
            Beauty is in the eye of the beholder or as we like to say, OutOn the
            eyes of the beholder!
          </p>
          <p className="beeauty-line">
            Style yourself like the gorgeous sunshine cosmonaut that you are!
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
            style={{ backgroundColor: '#EBE6E0' }}
          >
            Select shades
          </div>
        </div>
        <div className="circle-row">
          <div
            className="circle circle-shot"
            style={{ backgroundColor: '#9DACAA' }}
          >
            Snap a shot
          </div>
          <div
            className="circle circle-inbox"
            style={{ backgroundColor: '#9F8EA2' }}
          >
            Send to inbox
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneHeader;
