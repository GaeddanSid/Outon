import React, { useState } from 'react';
import photo1 from '../images/polaroid-manhattanmoon-purple-black-above-smile.jpeg';
import WebcamImage from '../components/Screenshot';
import { FiCameraOff } from 'react-icons/fi';
import { BiPowerOff } from 'react-icons/bi';

import '../styles/Phone.css';
import {
  Camera,
  PersonCheck,
  Trash,
  BootstrapReboot,
} from 'react-bootstrap-icons';

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

  return (
    <div className="container">
      <div className="phone">
        <div className="screen">
          <div className="carousel-container">
            {!isCameraOn && (
              <img src={photo1} alt="Phone Screen" className="phone-screen" />
            )}
            {isCameraOn && <WebcamImage />} {/* <PolaroidGallery /> */}
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
        <div className="camera-button">
          <Camera size={24} />
        </div>
        <div className="on-off-container">
          <div className="on-off" onClick={handleCameraButtonClick}>
            {isCameraOn ? <FiCameraOff /> : <BiPowerOff size={32} />}
          </div>
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
