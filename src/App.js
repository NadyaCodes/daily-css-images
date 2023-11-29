import "./App.css";
import { useState } from "react";
import { buttonsArray } from "./buttons";

// https://gist.github.com/MeFoDy/067daabf9c3ea0e554f045fc067e23b0

function App() {
  const [imageIndex, setImageIndex] = useState(null);

  return (
    <div className="App">
      <header className="App">
        <div className="border-box">
          <h1>
            Amazing <em className="teal">CSS ART</em> by Moi
          </h1>
        </div>
      </header>
      <body>
        <div className="button-container">
          {buttonsArray.map((btn, index) => {
            return (
              <button
                className="image-button"
                onClick={() => setImageIndex(index)}
                key={index}
              >
                {btn.text}
              </button>
            );
          })}
        </div>
        {imageIndex !== null && (
          <div className="image-container">
            {buttonsArray[imageIndex] && buttonsArray[imageIndex].component}
          </div>
        )}
      </body>
    </div>
  );
}

export default App;
