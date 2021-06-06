import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card.js";
import "./Cards.css";
import { getPokemons } from "../../redux/actions/index.js";
import Pagination from "../Pagination/Pagination.js";

function Cards({ input }) {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.pokemons.pokemons);

  var paginatedPokemons;
  if (pokemons) {
    paginatedPokemons = pokemons.result;
  }

  useEffect(() => {
    dispatch(getPokemons(1));
    // return () => console.log("cleanup");
  }, []);

  console.log("este es el pokemon buscado --> ", paginatedPokemons);

  return (
    <div className="cards">
      <div className="cardsContainter">
        {paginatedPokemons &&
          paginatedPokemons.map(
            (
              pokemon,
              index //Por cada pokemon de los 12 que me llegan, imprimo una tarjeta a la cual le paso casa pokemon
            ) => (
              <Card key={index} pokemon={pokemon} input={input} /> //al componente CARD le paso los valores de pokemon y el index para iterar el mapeo
            )
          )}
      </div>
      <Pagination pagination={pokemons && pokemons.pagination} />
    </div>
  );
}

export default Cards;
