import React from "react";
import "./ImageLinkBox.css";

const ImageLinkBox = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="white o-40">
        This magic brain can detect images in your images. Give it a try!
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            type="text"
            className="f4 pa2 w-70 center"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-purple"
            onClick={onButtonSubmit}
          >
            DETECT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkBox;
