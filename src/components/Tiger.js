import React from "react";

export default function Tiger() {
  return (
    <div id="tiger">
      <div className="head-container">
        <div className="ears">
          <div className="ear"></div>
          <div className="ear"></div>
        </div>
        <div className="head">
          <div className="face">
            <div className="eyes">
              <div className="eye-container">
                <div className="eye eye-left"></div>
              </div>
              <div className="eye-container">
                <div className="eye eye-right"></div>
              </div>
            </div>
            <div className="muzzle">
              <div className="nose">
                <div className="butterfly">
                  <div className="wing"></div>
                  <div className="wing"></div>
                  <div className="body"></div>
                </div>
              </div>
              <div className="mouth"></div>
            </div>
          </div>
          <div className="stripe-rights">
            <div className="stripe-right"></div>
            <div className="stripe-right"></div>
            <div className="stripe-right"></div>
            <div className="stripe-right"></div>
          </div>
          <div className="stripe-lefts">
            <div className="stripe-left"></div>
            <div className="stripe-left"></div>
            <div className="stripe-left"></div>
            <div className="stripe-left"></div>
          </div>
          <div className="stripe-tops">
            <div className="stripe-top"></div>
            <div className="stripe-top"></div>
            <div className="stripe-top"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
