import photo1 from '../images/polaroid-manhattanmoon-purple-black-above-smile.jpeg';
// import WebcamImage from '../components/Screenshot';
import { FiCameraOff } from 'react-icons/fi';
import { BiPowerOff } from 'react-icons/bi';
import Webcam from 'react-webcam';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  const [img, setImg] = useState<string | null>(null);
  const webcamRef = useRef<Webcam>(null);

  const handleCameraButtonClick = () => {
    setIsCameraOn((prevIsCameraOn) => !prevIsCameraOn);
  };

  useEffect(() => {
    setShowButtons(isCameraOn);
  }, [isCameraOn]);

  const videoConstraints = {
    width: 480,
    height: 820,
    facingMode: 'user',
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImg(imageSrc || null);
  }, []);

  const handleRetake = () => {
    setImg(null);
    // setShowButtons(false);
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
            {img !== null && (
              <>
                <img src={img} alt="screenshot" />
              </>
            )}
            {/* {isCameraOn && img && (
              <img src={img} alt="Captured Image" className="phone-screen" />
            )} */}
            <div className="video-container">
              {isCameraOn && !img && (
                <Webcam
                  audio={false}
                  mirrored={true}
                  width={430}
                  height={720}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                  className="video"
                />
              )}
            </div>
          </div>
          <div className={`hidden-box ${showButtons ? 'show' : ''}`}>
            <div className="hidden-content">{/* Phone content */}</div>
          </div>
        </div>
        <div className="buttons">
          {showButtons && (
            <div className={`half-circle ${showButtons ? 'show' : ''}`}>
              <div className="round-button retake-icon">
                <BootstrapReboot onClick={handleRetake} />
              </div>
              <div className="round-button person-icon">
                <PersonCheck />
              </div>
              <div className="round-button trash-icon">
                <Trash />
              </div>
            </div>
          )}
        </div>
        <div className="camera-button">
          <Camera size={24} onClick={capture} />
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
