import React, { useEffect, useState } from "react";
import "./Card.css";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS, REACT_APP_TYPES } = process.env;

function Card({ id, pokemon }) {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios
      .get(`${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}${id}`)
      .then((response) => {
        setPokemonData(response.data);
      });
  }, []);
  console.log(pokemonData.types);

  return (
    <div className="card">
      Nombre:{pokemon.name}<br></br>
      {pokemonData
        ? pokemonData.types && <span>type:{pokemonData.types[0].type.name}</span>
        : ""}
        {/* {pokemonData
        ? pokemonData.types[1] ? <span>type 2:{pokemonData.types[1].type.name}</span>: "" :""} */}
    </div>
  );
}

export default Card;
