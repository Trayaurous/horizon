import React, { useEffect, useRef, useState } from 'react';
import './CSSCameraBackground.css';

const CSSCameraBackground = ({ colorGrade = 'teal-orange' }) => {
  const videoRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(null);
  const [gradientAngle, setGradientAngle] = useState(0);

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

  useEffect(() => {
    if (hasCamera === false) {
      const interval = setInterval(() => {
        setGradientAngle((prev) => (prev + 0.5) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [hasCamera]);

  return (
    <div className="camera-bg-container">
      <video
        ref={videoRef}
        className={`camera-video-base ${hasCamera === true ? 'visible' : ''}`}
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
        <div
          className="fallback-background"
          style={{
            background: `linear-gradient(${gradientAngle}deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe)`,
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite',
          }}
        />
      )}
    </div>
  );
};

export default CSSCameraBackground;
