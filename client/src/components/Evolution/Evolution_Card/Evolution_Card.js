import React from "react";
import { capitalize } from "../../../utils";
import "./Evolution_Card.css";

function Evolution_Card({ pokemon }) {
  return (
    <>
      {pokemon && (
        <div className="evolution">
          <img
            className="evolution-img"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt=""
          ></img>
          {/* <img className="pokeball-background" src="/img/pokeball_background.svg" alt="" /> */}
          <span className="evolution-name">{capitalize(pokemon.name)}</span>
        </div>
      )}
    </>
  );
}

export default Evolution_Card;
