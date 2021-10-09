import React from "react";

function Image(props) {
  return (
    <div>
      <img className="image" src={props.src} alt="destination-img" />
    </div>
  );
}

export default Image;
