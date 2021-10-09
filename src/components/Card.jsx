import React from "react";
import Image from "./Image";
import Description from "./Description";
import Button from "./Button";

function Card({ data, handleClick }) {
  return (
    <div className="card">
      <Image src={data.image} />
      <Description {...data} />
      <Button data={data} handleClick={handleClick} />
    </div>
  );
}

export default Card;
