import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

function WebcamImage() {
  const [img, setImg] = useState<string | null>(null);
  const [cameraOn, setCameraOn] = useState(true);
  const webcamRef = useRef<Webcam>(null);

  const videoConstraints = {
    width: 240,
    height: 320,
    facingMode: 'user',
  };

  const toggleCamera = () => {
    setCameraOn((prevCameraOn) => !prevCameraOn);
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImg(imageSrc || null);
  }, []);

  return (
    <div className="Container">
      {cameraOn && (
        <>
          <Webcam
            audio={false}
            mirrored={true}
            width={440}
            height={440}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <button onClick={capture}>Capture photo</button>
        </>
      )}
      <button onClick={toggleCamera}>
        {cameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
      </button>
      {img !== null && (
        <>
          <img src={img} alt="screenshot" />
          <button onClick={() => setImg(null)}>Retake</button>
        </>
      )}
    </div>
  );
}

export default WebcamImage;
