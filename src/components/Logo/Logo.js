import React from "react";
import Tilt from "react-tilt";
import brain from "./brain-ver5.jpg";

const Logo = () => {
  return (
    <div className="ml5">
      <Tilt
        className="Tilt"
        options={{ max: 45 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img alt="" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
