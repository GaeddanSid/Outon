import React, { useState } from 'react';

import WebcamImage from '../components/Screenshot';
import '../styles/Phone.css';
import {
  Camera,
  PersonCheck,
  Trash,
  BootstrapReboot,
} from 'react-bootstrap-icons';

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
            <div className="round-button retake-icon">
              <BootstrapReboot />
              {/* <i className=" retake bi bi-bootstrap-reboot"></i> */}
            </div>
            <div className="round-button person-icon">
              <PersonCheck />
            </div>
            <div className="round-button trash-icon">
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
            <p className="circle-info-text">Selfie time</p>
          </div>
          <div
            className="circle circle-shades"
            style={{ backgroundColor: '#EBE6E0' }}
          >
            <p className="circle-info-text"> Select shades</p>
          </div>
        </div>
        <div className="circle-row">
          <div
            className="circle circle-shot"
            style={{ backgroundColor: '#9DACAA' }}
          >
            <p className="circle-info-text"> Snap a shot</p>
          </div>
          <div
            className="circle circle-inbox"
            style={{ backgroundColor: '#9F8EA2' }}
          >
            <p className="circle-info-text"> Send to inbox</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneHeader;
