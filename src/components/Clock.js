import React, { useState, useEffect } from "react";

export default function Clock() {
  const [startTime, setStartTime] = useState(new Date());

  const [timeRotate, setTimeRotate] = useState({ s: 0, m: 0, h: 0 });

  useEffect(() => {
    const currentSeconds = startTime.getSeconds();
    const currentMinutes = startTime.getMinutes();
    const currentHours24 = startTime.getHours();
    const currentHours =
      currentHours24 > 12 ? currentHours24 - 12 : currentHours24;

    const verticalAdjust = -90;

    const secondsStart = verticalAdjust + currentSeconds * 6;

    const minutesStart =
      verticalAdjust + currentMinutes * 6 + currentSeconds / 10;
    const hoursStart = verticalAdjust + currentHours * 30 + currentMinutes / 2;

    setTimeRotate({ s: secondsStart, m: minutesStart, h: hoursStart });
  }, [startTime]);

  const numbersArray = () => {
    const numbers = Array.from({ length: 12 }, (_, index) => index + 1);

    return numbers.map((number) => (
      <div key={number} className={`number`}>
        {number}
      </div>
    ));
  };

  return (
    <div id="clock">
      <style>
        {`
          @keyframes rotate-seconds {
            0% {
              transform: rotate(${timeRotate.s}deg);
            }
            100% {
              transform: rotate(${timeRotate.s + 360}deg);
            }
          }

          @keyframes rotate-minutes {
            0% {
              transform: rotate(${timeRotate.m}deg);
            }
            100% {
              transform: rotate(${timeRotate.m + 360}deg);
            }
          }

          @keyframes rotate-hours {
            0% {
              transform: rotate(${timeRotate.h}deg);
            }
            100% {
              transform: rotate(${timeRotate.h + 360}deg);
            }
          }
        `}
      </style>
      <div className="body">
        <div className="face">
          <div className="center">
            <div className="hand-container">
              <div className="hand second-hand"></div>
            </div>
            <div className="hand-container">
              <div className="hand minute-hand"></div>
            </div>
            <div className="hand-container">
              <div className="hand hour-hand"></div>
            </div>
          </div>
          <div className="center center-cover"></div>
          <div className="numbers">{numbersArray()}</div>
        </div>
      </div>
    </div>
  );
}
