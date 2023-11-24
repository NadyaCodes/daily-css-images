import React from "react";

export default function BearCub() {
  const paw = (
    <div className="paw">
      <div className="toes">
        <div className="toe"></div>
        <div className="toe"></div>
        <div className="toe"></div>
        <div className="toe"></div>
      </div>
      <div className="pad"></div>
    </div>
  );

  return (
    <div id="bear">
      <div className="ears">
        <div className="ear ear-left"></div>
        <div className="ear ear-right"></div>
      </div>
      <div className="head">
        <div className="eyes">
          <div className="eye"></div> <div className="eye"></div>
        </div>
        <div className="muzzle">
          <div className="nose"></div>
          <div className="smile"></div>
        </div>
      </div>
      <div className="body">
        <div className="arms">
          <div className="arm arm-left">{paw}</div>
          <div className="arm arm-right">{paw}</div>
        </div>
        <div className="legs">
          <div className="leg leg-left">{paw}</div>
          <div className="leg leg-right">{paw}</div>
        </div>
      </div>
    </div>
  );
}
