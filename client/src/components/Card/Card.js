import React, { useEffect, useState } from "react";
import "./Card.css";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS, REACT_APP_TYPES } = process.env;

function Card({ id, pokemon }) {
  const [pokemonData, setPokemonData] = useState([]);

  const prueba = pokemon.url.split("/");
  const num = prueba[6];
  
  useEffect(() => {
    axios
      .get(`${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}/${num}`)
      .then((response) => {
        setPokemonData(response.data);
      });
  }, []);
  console.log(pokemonData);

  return (
    <div className="card">
      <img
        src={
          pokemonData
            ? pokemonData.sprites && pokemonData.sprites.front_default
            : "null"
        }
      ></img>
      Nombre:{pokemonData.name}
      <br></br>
      {pokemonData
        ? pokemonData.types && (
            <span>type:{pokemonData.types[0].type.name}</span>
          )
        : ""}
      {pokemonData
        ? pokemonData.types &&
          pokemonData.types[1] &&
          pokemonData.types[1].type.name
        : "null"}
    </div>
  );
}

export default Card;
