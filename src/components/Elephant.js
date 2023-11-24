import React from "react";

export default function Elephant() {
  return (
    <div className="elephant">
      <div className="elephant-head-container">
        <div className="elephant-head"></div>
        <div className="elephant-eyes">
          <div className="elephant-eye"></div>
          <div className="elephant-eye"></div>
        </div>
        <div className="elephant-ears">
          <div className="elephant-ear"></div>
          <div className="elephant-ear"></div>
        </div>
        <div className="elephant-ears-inners">
          <div className="elephant-ear-inner"></div>
          <div className="elephant-ear-inner"></div>
        </div>
        <div className="elephant-trunk"></div>
        <div className="elephant-mouth"></div>
        <div className="elephant-bowtie">
          <div className="elephant-bowtie-side elephant-bowtie-left"></div>
          <div className="elephant-bowtie-middle"></div>
          <div className="elephant-bowtie-side elephant-bowtie-right"></div>
        </div>
      </div>
      <div className="elephant-body">
        <div className="elephant-front-legs">
          <div className="elephant-front-leg">
            <div className="elephant-toes">
              <div className="elephant-toe"></div>
              <div className="elephant-toe"></div>
              <div className="elephant-toe"></div>
              <div className="elephant-toe"></div>
            </div>
          </div>
          <div className="elephant-front-leg">
            <div className="elephant-toes">
              <div className="elephant-toe"></div>
              <div className="elephant-toe"></div>
              <div className="elephant-toe"></div>
              <div className="elephant-toe"></div>
            </div>
          </div>
        </div>
        <div className="elephant-back-legs">
          <div className="elephant-back-leg"></div>
          <div className="elephant-back-leg"></div>
        </div>
      </div>
    </div>
  );
}
