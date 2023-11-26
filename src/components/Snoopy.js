import React, { useState, useEffect } from "react";

export default function Snoopy() {
  const [bg, setBg] = useState("green");

  useEffect(() => {
    const colors = ["blue", "purple", "cyan", "pink", "green"];

    setTimeout(() => {
      let currentIndex = colors.findIndex((color) => color === bg);
      if (currentIndex < colors.length - 1) {
        setBg(colors[currentIndex + 1]);
      } else {
        setBg(colors[0]);
      }
    }, 400);
  }, [bg]);

  return (
    <div id="snoopy" className={`bg-${bg}`}>
      <div className="character-wrapper">
        <div className="snoopy">
          <div className="party-hat"></div>
          <div className="head">
            <div className="face">
              <div className="muzzle">
                <div className="nose"></div>
              </div>
              <div className="eyebrows">
                <div className="eyebrow"></div>
                <div className="eyebrow"></div>
              </div>
              <div className="glasses">
                <div className="glass"></div>
                <div className="glass"></div>
              </div>
            </div>
            <div className="ear"></div>
          </div>
        </div>
        <div className="woodstock">
          <div className="hat-container">
            <div className="party-hat"></div>
          </div>
          <div className="woodstock-head">
            <div className="woodstock-muzzle"></div>
            <div className="woodstock-glasses">
              <div className="woodstock-glass"></div>
              <div className="woodstock-glass"></div>
            </div>
          </div>
          <div className="body"></div>
        </div>
      </div>
      <div className="pool"></div>
    </div>
  );
}
