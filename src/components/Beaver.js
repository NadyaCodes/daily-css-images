import React from "react";

export default function Beaver() {
  return (
    <div id="beaver">
      <div className="tophat">
        <div className="tophat-main"></div>
        <div className="tophat-brim"></div>
      </div>
      <div className="head">
        <div className="face">
          <div className="mouth"></div>
        </div>
        <div className="ears">
          <div className="ear"></div>
          <div className="ear"></div>
        </div>
        <div className="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className="nose"></div>
        <div className="muzzle">
          <div className="muzzle-side"></div>
          <div className="muzzle-side"></div>
        </div>
        <div className="teeth">
          <div className="tooth"></div>
          <div className="tooth"></div>
        </div>
      </div>
      <div className="arms">
        <div className="arm"></div>
        <div className="arm"></div>
      </div>
      <div className="body">
        <div className="legs">
          <div className="leg"></div>
          <div className="leg"></div>
        </div>
      </div>
      <div className="tail"></div>
      <div className="cane-container">
        <div className="cane"></div>
      </div>
    </div>
  );
}
