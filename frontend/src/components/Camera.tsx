import React from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: { min: 480 },
  height: { min: 820 },
  facingMode: 'user',
};

function Camera() {
  return (
    <div className="camera">
      <Webcam
        imageSmoothing={true}
        screenshotFormat="image/webp"
        mirrored={true}
        // width={480}
        // height={920}
        videoConstraints={videoConstraints}
      />
    </div>
  );
}
export default Camera;
// import React, { useEffect, useRef, useState } from 'react';

// const CameraComponent: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [videoStream, setVideoStream] = useState<MediaStream>();
//   const [cameraAccess, setCameraAccess] = useState(false);
//   const [imageData, setImageData] = useState<string | null>(null);

//   const startCamera = () => {
//     console.log('sd');
//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then((stream) => {
//         console.log('hej2');
//         setVideoStream(stream);
//         // if (videoRef.current) {
//         if (videoRef.current !== null) {
//           videoRef.current.srcObject = stream;
//           console.log('hej');
//           setCameraAccess(true);
//           console.log(cameraAccess);
//         }
//       })
//       .catch((error) => {
//         console.log('Error accessing camera:', error);
//       });
//   };

//   const captureImage = () => {
//     if (videoRef.current) {
//       const video = videoRef.current;
//       const canvas = document.createElement('canvas');
//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;
//       canvas.getContext('2d')?.drawImage(video, 0, 0);
//       const imageUrl = canvas.toDataURL('image/png');
//       setImageData(imageUrl);

//       // You can save the captured image using the 'imageUrl' here
//       // For example, send it to a server or save it locally
//     }
//   };

//   useEffect(() => {
//     if (!cameraAccess && videoRef.current && videoRef.current.srcObject) {
//       const stream = videoRef.current.srcObject as MediaStream;
//       stream.getTracks().forEach((track) => track.stop());
//     }
//   }, [cameraAccess]);

//   return (
//     <div>
//       {!cameraAccess && <button onClick={startCamera}>Open Camera</button>}
//       {cameraAccess && (
//         <div>
//           {/* <video ref={videoRef} autoPlay /> */}
//           {/* <video src={ window.URL.createObjectURL(videoStream)} autoPlay /> */}
//           <video src={ videoStream} autoPlay />
//           <button onClick={captureImage}>Capture</button>
//           {imageData && <img src={imageData} alt="Captured" />}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CameraComponent;
