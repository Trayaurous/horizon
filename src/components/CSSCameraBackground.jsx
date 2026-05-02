import React, { useEffect, useRef, useState } from 'react';
import './CSSCameraBackground.css';

const CSSCameraBackground = ({ colorGrade = 'teal-orange', mirrored = false }) => {
  const videoRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        });

        video.srcObject = stream;
        await video.play();
        setHasCamera(true);
      } catch (err) {
        console.log('Camera access denied or not available:', err);
        setHasCamera(false);
      }
    };

    startCamera();

    return () => {
      if (video.srcObject) {
        video.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="camera-bg-container">
      <video
        ref={videoRef}
        className={`camera-video-base ${hasCamera === true ? 'visible' : ''} ${mirrored ? 'mirrored' : ''}`}
        autoPlay
        playsInline
        muted
      />
      {hasCamera === true && (
        <>
          <div className={`camera-color-grade ${colorGrade}`} />
          <div className="camera-blur-overlay" />
        </>
      )}
      {(hasCamera === false || hasCamera === null) && (
        <>
          <div className="fallback-image" />
          <div className={`camera-color-grade ${colorGrade}`} />
          <div className="camera-blur-overlay" />
        </>
      )}
    </div>
  );
};

export default CSSCameraBackground;
