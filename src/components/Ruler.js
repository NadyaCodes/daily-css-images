import React from "react";

export default function Ruler() {
  const cmArray = () => {
    const cms = Array.from({ length: 30 }, (_, index) => index + 1);

    return cms.map((cm) => (
      <div key={cm} className="cm-line">
        <div className="cm-number">{cm}</div>
        <div className="cm-mid-line"></div>
      </div>
    ));
  };

  const inchesArray = () => {
    const inches = Array.from({ length: 12 }, (_, index) => index + 1);

    return inches.map((inch) => (
      <div key={inch} className="inch-line">
        <div className="inch-number">{inch}</div>
        <div className="inch-mid-line"></div>
      </div>
    ));
  };

  return (
    <div id="ruler">
      <div className="ruler-container">
        <div className="ruler">
          <div className="cms-container">{cmArray()}</div>
          <div className="inches-container">{inchesArray()}</div>
        </div>
      </div>
      <div className="scroll">Scroll &rarr; </div>
    </div>
  );
}
