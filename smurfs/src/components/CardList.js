import React from "react";
import { getData, deletePost } from "../action";
import { connect } from "react-redux";
import Card from "./Card";
import CardInput from "./CardInput";

const CardList = props => {
  console.log("CHECK DELETE", props.id);
  return (
    <>
      <CardInput />
      <button onClick={props.getData}>Get Smurf</button>
      {props.cards.map(card => (
        <Card key={card.id} card={card} deletePost={deletePost} />
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(
  mapStateToProps,
  { getData, deletePost }
)(CardList);
