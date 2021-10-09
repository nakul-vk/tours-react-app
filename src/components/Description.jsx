import React, { useState } from "react";
import Price from "./Price";

function Description({ name, price, info }) {
  const [readMore, setReadMore] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setReadMore(!readMore);
  }

  return (
    <div className="description">
      <div>
        <h4>{name}</h4>
        <Price price={price} />
      </div>
      <p>
        {readMore ? `${info}  ` : `${info.substring(0, 199)}...`}
        <a onClick={(e) => handleClick(e)} href="">
          {readMore ? "Read Less" : "Read More"}
        </a>
      </p>
    </div>
  );
}

export default Description;
