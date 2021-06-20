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
      <div
        className={`card ${pokemon && pokemon.types[0]?.type.name}`}
        onClick={() => openModal()}
      >
        <div className="card-info">
          <span className="pokemon-name">
            {pokemon && capitalize(pokemon.name)}
          </span>

          <span>{pokemon && pokemon.types[0]?.type.name}</span>
          <span>{pokemon && pokemon.types[1]?.type.name}</span>
          <img
            className="pokemon-img"
            src={
              pokemon && pokemon.sprites.other["official-artwork"].front_default
            }
            alt=""
          />
          <img className="pokeball" src="/img/pokeball.svg" alt="" />
        </div>
        {/* 
        <PokemonDetails></PokemonDetails> */}
      </div>
      <PokemonDetails
        showModal={showModal}
        setShowModal={setShowModal}
        pokemon={pokemon}
      ></PokemonDetails>
    </>
  );
}

export default Card;
