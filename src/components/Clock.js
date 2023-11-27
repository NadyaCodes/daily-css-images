import React from "react";

export default function Clock() {
  return (
    <div id="clock">
      <style>
        {`
          @keyframes rotate-seconds {
            0% {
              transform: rotate(${40}deg);
            }
            100% {
              transform: rotate(${400}deg);
            }
          }
        `}
      </style>
      <div className="body">
        <div className="face">
          <div className="center">
            <div className="hand-container">
              <div className="hand"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
