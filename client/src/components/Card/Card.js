/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import "./Card.css";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import { useEffect } from "react";
import { capitalize } from "../../utils";

function Card({ pokemon }) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      {pokemon && (
        <>
          <div
            className={`card ${pokemon.types[0]?.name}`}
            onClick={() => openModal()}
          >
            <div className="card-info">
              <span className="pokemon-name">{capitalize(pokemon.name)}</span>

              <span>{pokemon.types[0]?.name}</span>
              <span>{pokemon.types[1]?.name}</span>
              <img className="pokemon-img" src={pokemon.img} alt="" />
              <img className="pokeball" src="/img/pokeball.svg" alt="" />
            </div>
          </div>
          <PokemonDetails
            showModal={showModal}
            setShowModal={setShowModal}
            pokemon={pokemon}
          ></PokemonDetails>
        </>
      )}
    </>
  );
}

export default Card;
