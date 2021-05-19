import React, { useEffect, useState } from "react";
import Card from "../Card/Card.js";
import "./Cards.css";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS } = process.env;

function Cards() {
  const [pokemons, setPokemons] = useState([]); //Voy a guardar en un estado los pokemons que me llega. Al principio es un arreglo vacio

  useEffect(() => {
    axios.get(`${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}`).then((response) => {
      setPokemons(response.data);
    });
  }, []);
  console.log(pokemons);
  return (
    <div className="cards">
      <h3 className="titulo">Estas son las tarjetas</h3>
      <div className="cardsContainter">
        {pokemons.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon}/>
        ))}
      </div>
    </div>
  );
}

export default Cards;
