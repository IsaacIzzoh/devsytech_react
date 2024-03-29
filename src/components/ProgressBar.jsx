import React, { useState, useEffect } from "react";

const ProgressBar = ({ startProgress }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (startProgress) {
      setIsVisible(true);
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress === 100) {
            clearInterval(interval);
            setIsVisible(false);
            return 0;
          } else {
            return prevProgress + 10;
          }
        });
      }, 1000); // Adjust the interval duration as needed
    }
  }, [startProgress]);

  return (
    <div>
      {isVisible && (
        <div className="progress-container">
          <div
            className="progress-bar"
            id="myBar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
