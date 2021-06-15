import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card.js";
import "./Cards.css";
import { getPokemons, setPokemons } from "../../redux/actions/index.js";
import Pagination from "../Pagination/Pagination.js";
import { paginate } from "../../utils/index.js";

function Cards({ input }) {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemonsReducer.allPokemons.data);

  var paginatedPokemons;
  if (pokemons && pokemons.length) {
    paginatedPokemons = paginate(pokemons);
    dispatch(setPokemons(pokemons));
  }

  console.log(paginatedPokemons);

  useEffect(() => {
    dispatch(getPokemons(1, "", ""));
    // return () => console.log("cleanup");
  }, []);

  return (
    <div className="cards">
      <div className="cardsContainter">
        {paginatedPokemons &&
          paginatedPokemons.result.map((pokemon, index) => (
            <Card key={index} pokemon={pokemon} input={input} />
          ))}
      </div>
      <Pagination pagination={pokemons && pokemons.pagination} />
    </div>
  );
}

export default Cards;
