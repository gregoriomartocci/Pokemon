import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card.js";
import "./Cards.css";
import { getPokemons } from "../../redux/actions/index.js";
import Pagination from "../Pagination/Pagination.js";

function Cards({ input }) {
  const dispatch = useDispatch();
  /*  const [pokemons, setPokemons] = useState([]); */ //Voy a guardar en un estado los pokemons que me llega. Al principio es un arreglo vacio
  const { pokemons } = useSelector((state) => state.pokemons.pokemons);

  /*   var pokemons = []; */
  /* 
  if (pokemonData) {
    pokemons = pokemonData.pokemons;
  }
 */

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div className="cards">
      <div className="cardsContainter">
        {pokemons &&
          pokemons.map(
            (
              pokemon,
              index //Por cada pokemon de los 12 que me llegan, imprimo una tarjeta a la cual le paso casa pokemon
            ) => (
              <Card key={index} pokemon={pokemon} input={input} /> //al componente CARD le paso los valores de pokemon y el index para iterar el mapeo
            )
          )}
      </div>
      <Pagination />
    </div>
  );
}

export default Cards;
