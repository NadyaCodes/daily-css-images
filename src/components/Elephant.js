import React from "react";

export default function Elephant() {
  return (
    <div id="elephant">
      <div className="head-container">
        <div className="head"></div>
        <div className="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className="ears">
          <div className="ear"></div>
          <div className="ear"></div>
        </div>
        <div className="ears-inners">
          <div className="ear-inner"></div>
          <div className="ear-inner"></div>
        </div>
        <div className="trunk"></div>
        <div className="mouth"></div>
        <div className="bowtie">
          <div className="bowtie-side bowtie-left"></div>
          <div className="bowtie-middle"></div>
          <div className="bowtie-side bowtie-right"></div>
        </div>
      </div>
      <div className="body">
        <div className="front-legs">
          <div className="front-leg">
            <div className="toes">
              <div className="toe"></div>
              <div className="toe"></div>
              <div className="toe"></div>
              <div className="toe"></div>
            </div>
          </div>
          <div className="front-leg">
            <div className="toes">
              <div className="toe"></div>
              <div className="toe"></div>
              <div className="toe"></div>
              <div className="toe"></div>
            </div>
          </div>
        </div>
        <div className="back-legs">
          <div className="back-leg"></div>
          <div className="back-leg"></div>
        </div>
      </div>
    </div>
  );
}
