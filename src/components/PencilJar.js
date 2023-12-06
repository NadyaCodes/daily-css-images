import React from "react";

export default function PencilJar() {
  const pencil = () => {
    return (
      <div className="pencil">
        <div className="tip"></div>
        <div className="body"></div>
        <div className="eraser"></div>
      </div>
    );
  };
  return (
    <div id="pencilJar">
      <div className="jar">
        <div className="top"></div>
        <div className="middle"></div>
      </div>
      <div className="pencil-container">
        {pencil()}
        {pencil()}
        {pencil()}
      </div>
      <div className="snail-container">
        <div className="snail">
          <div className="shell"></div>
          <div className="body">
            <div className="antenna"></div>
            <div className="antenna"></div>
            <div className="eye"></div>
          </div>
        </div>
        <div className="sludge-line"></div>
      </div>
    </div>
  );
}
