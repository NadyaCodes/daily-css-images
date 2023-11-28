import React from "react";

export default function Ruler() {
  const cmArray = () => {
    const cms = Array.from({ length: 30 }, (_, index) => index + 1);

    return cms.map((cm) => (
      <div key={cm} className="cm-line">
        <div className="cm-number">{cm}</div>
        <div>
          <div className="cm-quarter-line left"></div>
          <div className="cm-quarter-line left"></div>
          <div className="cm-quarter-line left"></div>
          <div className="cm-quarter-line left"></div>
        </div>
        <div className="cm-mid-line"></div>
        <div>
          <div className="cm-quarter-line right"></div>
          <div className="cm-quarter-line right"></div>
          <div className="cm-quarter-line right"></div>
          <div className="cm-quarter-line right"></div>
        </div>
      </div>
    ));
  };

  const inchesArray = () => {
    const inches = Array.from({ length: 12 }, (_, index) => index + 1);

    const inchQuarters = () => {
      return (
        <div className="inch-smalls-container">
          <div className="inch-eighth-line"></div>
          <div className="inch-quarter-line"></div>
          <div className="inch-eighth-line"></div>
        </div>
      );
    };

    return inches.map((inch) => (
      <div key={inch} className="inch-line">
        <div className="inch-number">{inch}</div>
        <div className="left-quarters">{inchQuarters()}</div>
        <div className="inch-mid-line"></div>
        <div className="right-quarters">{inchQuarters()}</div>
      </div>
    ));
  };

  return (
    <div id="ruler">
      <div className="ruler-container">
        <div className="ruler">
          <div className="cms-container">{cmArray()}</div>
          <div className="hole-container">
            <div className="hole"></div>
          </div>
          <div className="inches-container">{inchesArray()}</div>
        </div>
      </div>
      <div className="scroll">Scroll &rarr; </div>
    </div>
  );
}
