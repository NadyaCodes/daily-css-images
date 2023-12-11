import React from "react";

export default function Pizza() {
  const tomato = () => {
    const tomatoArray = Array.from({ length: 17 }, (_, index) => index + 1);

    return tomatoArray.map(() => {
      return <div className="tomato"></div>;
    });
  };

  const cheese = () => {
    const cheeseArray = Array.from({ length: 9 }, (_, index) => index + 1);

    return cheeseArray.map(() => {
      return <div className="cheese"></div>;
    });
  };

  const basil = () => {
    const basilArray = Array.from({ length: 7 }, (_, index) => index + 1);

    return basilArray.map((num) => {
      return (
        <div className="basil-wrapper">
          <div className={`basil basil-${num}`}></div>
        </div>
      );
    });
  };

  const disappear = () => {
    const disappearArray = Array.from({ length: 6 }, (_, index) => index + 1);

    return disappearArray.map(() => {
      return <div className="disappear"></div>;
    });
  };
  return (
    <div id="pizza">
      <div className="crust">
        <div className="disappear-container">{disappear()}</div>
        <div className="base">
          <div className="tomato-container">{tomato()}</div>
          <div className="cheese-container">
            <div className="cheese-wrapper">{cheese()}</div>
          </div>
          <div className="basil-container">{basil()}</div>
        </div>
      </div>
      <div className="watcher-container">
        <div className="watcher">
          <div className="eye-container">
            <div className="eye">
              <div className="pupil"></div>
            </div>
            <div className="eye">
              <div className="pupil"></div>
            </div>
          </div>
          <div className="cheeks">
            <div className="cheek"></div>
            <div className="cheek"></div>
          </div>
          <div className="mouth-container">
            <div className="mouth"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
