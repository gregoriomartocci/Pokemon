import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card.js";
import "./Cards.css";
import { getPokemons, setPokemons } from "../../redux/actions/index.js";
import Pagination from "../Pagination/Pagination.js";

function Cards({ input }) {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemonsReducer.pokemons.data);

  var paginatedPokemons;
  if (pokemons) {
    paginatedPokemons = pokemons;
  }

  useEffect(() => {
    dispatch(getPokemons(1, "", ""));
    dispatch(setPokemons());
    return () => console.log("cleanup");
  }, []);

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
