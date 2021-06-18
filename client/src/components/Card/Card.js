/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import "./Card.css";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import { useEffect } from "react";

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
        className={`card ${
          pokemon ? pokemon.types && pokemon.types[0].type.name : null
        }`}
        onClick={() => openModal()}
      >
        <div className="card-info">
          <span className="pokemon-name">{pokemon.name}</span>

          <span>
            {pokemon ? pokemon.types && pokemon.types[0].type.name : null}
          </span>
          <span>
            {pokemon
              ? pokemon.types && pokemon.types[1] && pokemon.types[1].type.name
              : null}
          </span>
          <img
            className="pokemon-img"
            src={
              // pokemonData
              //   ? pokemonData.sprites && pokemonData.sprites.front_default
              //   : null
              pokemon
                ? pokemon.sprites &&
                  pokemon.sprites.other["official-artwork"].front_default
                : null
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
