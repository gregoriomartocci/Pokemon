import React from "react";
import Card from "../Card/Card.js";
import "./Cards.css";

function Cards({ data }) {
  return (
    <div className="cards">
      <div className="cardsContainter">
        {data?.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
