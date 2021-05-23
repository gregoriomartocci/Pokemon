import {
  POKEMONS_LIST_FAIL,
  POKEMONS_LIST_REQUEST,
  POKEMONS_LIST_SUCCESS,
  POKEMON_CREATED_REQUEST,
  POKEMON_CREATED_SUCCESS,
  POKEMON_CREATED_FAIL,
  POKEMON_DETAILS_REQUEST,
  POKEMON_DETAILS_SUCCESS,
  POKEMON_DETAILS_FAIL,
} from "../constants/pokemonConstants";

export const pokemonsReducer = (state = { pokemons: [] }, action) => {
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

export const pokemonCreatedReducer = (state = { pokemonCreated: {} }, action) => {
  switch (action.type) {
    case POKEMON_CREATED_REQUEST:
      return { loading: true };
    case POKEMON_CREATED_SUCCESS:
      return { loading: false, pokemonCreated: action.payload };
    case POKEMON_CREATED_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const pokemonDetailsReducer = (state = { pokemonDetails: {} }, action) => {
  switch (action.type) {
    case POKEMON_DETAILS_REQUEST:
      return { loading: true };
    case POKEMON_DETAILS_SUCCESS:
      return { loading: false, pokemonDetails: action.payload };
    case POKEMON_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};