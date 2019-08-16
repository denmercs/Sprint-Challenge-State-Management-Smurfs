import React from "react";

const Card = props => {
  return (
    <>
      <h3>Name: {props.card.name}</h3>
      <p>Height: {props.card.height}</p>
      <p>age: {props.card.age}</p>
    </>
  );
};

export default Card;
