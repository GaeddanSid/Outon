import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

function WebcamImage() {
  const [img, setImg] = useState<string | null>(null);
  const [cameraOn, setCameraOn] = useState(true);
  const webcamRef = useRef<Webcam>(null);

  const videoConstraints = {
    width: 430,
    height: 720,
    facingMode: 'user',
  };

  // const toggleCamera = () => {
  //   setCameraOn((prevCameraOn) => !prevCameraOn);
  // };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImg(imageSrc || null);
  }, []);

  return (
    <div className="video-container">
      {cameraOn && (
        <>
          <Webcam
            audio={false}
            mirrored={true}
            width={430}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <button onClick={capture}>Capture photo</button>
        </>
      )}

      {img !== null && (
        <>
          <img src={img} alt="screenshot" />
          <button onClick={() => setImg(null)}>Retake</button>
        </>
      )}
      <style>
        {`
  video {
    width:550px;
    height:fit-content;
  }
`}
      </style>
    </div>
  );
}

export default WebcamImage;
