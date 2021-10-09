import React from "react";

function Button({ data, handleClick }) {
  return (
    <div className="btn">
      <button
        onClick={() => {
          handleClick(data.id);
        }}
      >
        Not Interested
      </button>
    </div>
  );
}

export default Button;
