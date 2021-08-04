import React from "react";
import { capitalize } from "../../../utils";
import "./Evolution_Card.css";

function Evolution_Card({ pokemon }) {
  return (
    <>
      {pokemon && (
        <div className="evolution">
          {<img className="evolution-img" src={pokemon.img} alt=""></img>}
          <span className="evolution-name">{capitalize(pokemon.name)}</span>
        </div>
      )}
    </>
  );
}

export default Evolution_Card;
