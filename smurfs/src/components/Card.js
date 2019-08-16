import React from "react";
import { deletePost } from "../action";

const Card = props => {
  return (
    <>
      <h3>Name: {props.card.name}</h3>
      <p>Height: {props.card.height}</p>
      <p>age: {props.card.age}</p>
      <button onClick={() => deletePost(props.card.id)}>Remove</button>
    </>
  );
};

export default Card;
