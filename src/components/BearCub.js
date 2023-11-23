import React from "react";

export default function BearCub() {
  const paw = (
    <div className="bear-paw">
      <div className="bear-toes">
        <div className="bear-toe"></div>
        <div className="bear-toe"></div>
        <div className="bear-toe"></div>
        <div className="bear-toe"></div>
      </div>
      <div className="bear-pad"></div>
    </div>
  );

  return (
    <div className="bear">
      <div className="bear-ears">
        <div className="bear-ear bear-ear-left"></div>
        <div className="bear-ear bear-ear-right"></div>
      </div>
      <div className="bear-head">
        <div className="bear-eyes">
          <div className="bear-eye"></div> <div className="bear-eye"></div>
        </div>
        <div className="bear-muzzle">
          <div className="bear-nose"></div>
          <div className="bear-smile"></div>
        </div>
      </div>
      <div className="bear-body">
        <div className="bear-arms">
          <div className="bear-arm bear-arm-left">{paw}</div>
          <div className="bear-arm bear-arm-right">{paw}</div>
        </div>
        <div className="bear-legs">
          <div className="bear-leg bear-leg-left">{paw}</div>
          <div className="bear-leg bear-leg-right">{paw}</div>
        </div>
      </div>
    </div>
  );
}
