
import {POKEMONS_LIST_FAIL, POKEMONS_LIST_REQUEST, POKEMONS_LIST_SUCCESS, } from "../constants/pokemonConstants"





export const pokemonListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case POKEMONS_LIST_REQUEST:
      return { loading: true };
    case POKEMONS_LIST_SUCCESS:
      return { loading: false, pokemons: action.payload };
    case POKEMONS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
