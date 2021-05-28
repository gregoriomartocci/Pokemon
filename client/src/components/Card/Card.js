/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import "./Card.css";
import dotenv from "dotenv";
import axios from "axios";
import { Link } from "react-router-dom";
import { CgPokemon } from "react-icons/cg";

dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS, REACT_APP_TYPES } = process.env;

function Card({ pokemon }) {
  const [pokemonData, setPokemonData] = useState([]);

  const pokemonId = pokemon.url.split("/");
  const num = pokemonId[6];

  useEffect(() => {
    axios
      .get(`${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}/${num}`)
      .then((response) => {
        setPokemonData(response.data);
      });
  }, []);

  return (
    <Link to={`/pokemon/${num} `}>
      <div
        className={`card ${
          pokemonData
            ? pokemonData.types && pokemonData.types[0].type.name
            : null
        }`}
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
              pokemonData
                ? pokemonData.sprites && pokemonData.sprites.front_default
                : null
            }
            alt=""
          />
          <img className="pokeball" src="/img/pokebal.svg" alt="" />
        </div>
      </div>
    </Link>
  );
}

export default Card;
