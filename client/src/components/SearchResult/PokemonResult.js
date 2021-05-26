import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PokemonSearch from "../PokemonSearch/PokemonSearch.js";
import "./PokemonResult.css";
import { getPokemons } from "../../redux/actions/index.js";

function PokemonResult() {
  const dispatch = useDispatch();
  /*  const [pokemons, setPokemons] = useState([]); */ //Voy a guardar en un estado los pokemons que me llega. Al principio es un arreglo vacio
  const  pokemonSearch  = useSelector(
    (state) => state.pokemons.pokemonSearch
  );
  var data = {}
  if (pokemonSearch) {
    data = pokemonSearch.pokemonSearch[0]

    /* console.log(pokemonSearch, "Esto es el estado de pokemonSearch"); */
  }
  /*   var pokemons = []; */
  /* 
  if (pokemonData) {
    pokemons = pokemonData.pokemons;
  }
 */
  /* useEffect(() => {
    dispatch(pokemonSearch(pokemonName));
  }, []); */

  return (
    <div className="cards">
      <h3 className="titulo">Estas son las tarjetas</h3>
      <div className="cardsContainter">
        {
          pokemonSearch ? <PokemonSearch pokemon={data} /> : null //al componente CARD le paso los valores de pokemon y el index para iterar el mapeo
        }
      </div>
    </div>
  );
}

export default PokemonResult;
