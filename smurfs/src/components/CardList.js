import React from "react";
import { getData } from "../action";
import { connect } from "react-redux";
import Card from "./Card";
import CardInput from "./CardInput";

const CardList = props => {
  return (
    <>
      <CardInput />
      <button onClick={props.getData}>Get Smurf</button>
      {props.cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(
  mapStateToProps,
  { getData }
)(CardList);
