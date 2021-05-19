import React, { useEffect, useState } from "react";
import Card from "../Card/Card.js";
import "./Cards.css";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS } = process.env;
console.log(`${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}?page=4`)
console.log("http://localhost:3001/pokemons?page=4")
function Cards() {
  const [pokemons, setPokemons] = useState([]); //Voy a guardar en un estado los pokemons que me llega. Al principio es un arreglo vacio

  useEffect(() => {
    axios.get(`${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}?page=4`).then((response) => {
      setPokemons(response.data);
    });
  }, []);
  console.log(pokemons)
   return (
    <div className="cards">
      <h3 className="titulo">Estas son las tarjetas</h3>
      <div className="cardsContainter">
        {pokemons.map(
          (pokemon, index) => ( //Por cada pokemon de los 12 que me llegan, imprimo una tarjeta a la cual le paso casa pokemon
            <Card key={index} id={index} pokemon={pokemon} /> //al componente CARD le paso los valores de pokemon y el index para iterar el mapeo
          )
        )}
      </div>
    </div>
  );
}

export default Cards;
