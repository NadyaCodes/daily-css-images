import React from "react";

export default function Notepad() {
  const coils = () => {
    const coilArray = Array.from({ length: 15 }, (_, index) => index + 1);

    return coilArray.map((num) => (
      <div key={num} className="coil-container">
        <div className="coil"></div>
        <div className="coil-hole"></div>
      </div>
    ));
  };

  const lines = () => {
    const lineArray = Array.from({ length: 20 }, (_, index) => index + 1);

    return lineArray.map((num) => <div key={num} className="line"></div>);
  };

  const animatedText = () => {
    const text = "OMG - you'll NEVER guess what happened in class today!!!";

    const letters = text.split("").map((letter, index) => (
      <span key={index} style={{ animationDelay: `${index * 0.1 + 1}s` }}>
        {letter}
      </span>
    ));

    return <div className="text">{letters}</div>;
  };

  return (
    <div id="notepad">
      <div className="notepad-container">
        <div className="paper-back"></div>
        <div className="coils">{coils()}</div>
        <div className="paper">
          <div className="lines">
            {lines()}
            {animatedText()}
          </div>
        </div>
      </div>
    </div>
  );
}
