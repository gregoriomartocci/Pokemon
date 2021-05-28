import React, { useEffect, useState } from "react";
import "./PokemonSearch.css";
import dotenv from "dotenv";
import axios from "axios";
import { Link } from "react-router-dom";

dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS, REACT_APP_TYPES } = process.env;

function Card({ pokemon }) {
  return (
    <Link /* to={`/${num}`} */>
      <div className="card">
        <img
          src={
            pokemon ? pokemon.sprites && pokemon.sprites.front_default : "null"
          }
          alt=""
        />
        Nombre:{pokemon.name}
        <br></br>
        {pokemon
          ? pokemon.types && <span>type:{pokemon.types[0].type.name}</span>
          : ""}
        {pokemon
          ? pokemon.types && pokemon.types[1] && pokemon.types[1].type.name
          : "null"}
      </div>
    </Link>
  );
}

export default Card;
