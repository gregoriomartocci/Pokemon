/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import "./Card.css";
import dotenv from "dotenv";
import axios from "axios";
import { Link } from "react-router-dom";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS } = process.env;

function Card({ pokemon }) {
  const [showModal, setShowModal] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  var num;

  if (pokemon.url) {
    const pokemonId = pokemon.url.split("/");
    num = pokemonId[6];
  } else {
    num = pokemon.id;
  }

  useEffect(() => {
    axios
      .get(`${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}/${num}`)
      .then((response) => {
        setPokemonData(response.data);
      });
  }, []);

  console.log(pokemonData);

  return (
    <>
      <div
        className={`card ${
          pokemonData
            ? pokemonData.types && pokemonData.types[0].type.name
            : null
        }`}
        onClick={() => openModal()}
      >
        <div className="card-info">
          <span className="pokemon-name">{pokemonData.name}</span>

          <span>
            {pokemonData
              ? pokemonData.types && pokemonData.types[0].type.name
              : null}
          </span>
          <span>
            {pokemonData
              ? pokemonData.types &&
                pokemonData.types[1] &&
                pokemonData.types[1].type.name
              : null}
          </span>
          <img
            className="pokemon-img"
            src={
              // pokemonData
              //   ? pokemonData.sprites && pokemonData.sprites.front_default
              //   : null
              pokemonData
                ? pokemonData.sprites &&
                  pokemonData.sprites.other["official-artwork"].front_default
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
        pokemon={pokemonData}
      ></PokemonDetails>
    </>
  );
}

export default Card;
