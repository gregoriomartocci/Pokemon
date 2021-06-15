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
  POKEMON_SEARCH_REQUEST,
  POKEMON_SEARCH_SUCCESS,
  POKEMON_SEARCH_FAIL,
  SET_POKEMONS_REQUEST,
  SET_POKEMONS_SUCCESS,
  SET_POKEMONS_FAIL,
} from "../constants/pokemonConstants";

const initialState = {
  allPokemons: [],
  pokemons: [],
  pokemonSearch: [],
  pokemonDetails: {},
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    // SET POKEMONS
    case SET_POKEMONS_REQUEST:
      return {
        ...state,
        allPokemons: { loading: true },
      };
    case SET_POKEMONS_SUCCESS:
      return {
        ...state,
        allPokemons: { loading: false, data: action.payload },
      };

    case SET_POKEMONS_FAIL:
      return {
        ...state,
        allPokemons: { loading: false, error: action.payload },
      };

    // LIST POKEMONS

    case POKEMONS_LIST_REQUEST:
      return {
        ...state,
        pokemons: { loading: true },
      };

    case POKEMONS_LIST_SUCCESS:
      return {
        ...state,
        pokemons: { loading: false, data: action.payload },
      };

    case POKEMONS_LIST_FAIL:
      return { ...state, pokemons: { loading: false, error: action.payload } };

    // CREATE POKEMON

    case POKEMON_CREATED_REQUEST:
      return { ...state, pokemons: { loading: true } };

    case POKEMON_CREATED_SUCCESS:
      return {
        ...state,
        pokemonCreated: { loading: false, data: action.payload },
      };

    case POKEMON_CREATED_FAIL:
      return {
        ...state,
        pokemonCreated: { loading: false, error: action.payload },
      };

    // POKEMON DETAILS

    case POKEMON_DETAILS_REQUEST:
      return { ...state, pokemonDetails: { loading: true } };

    case POKEMON_DETAILS_SUCCESS:
      return {
        ...state,
        pokemonDetails: { loading: false, data: action.payload },
      };

    case POKEMON_DETAILS_FAIL:
      return {
        ...state,
        pokemonDetails: { loading: false, error: action.payload },
      };

    // POKEMON SEARCH

    case POKEMON_SEARCH_REQUEST:
      return { ...state, pokemons: { loading: true } };

    case POKEMON_SEARCH_SUCCESS:
      return {
        ...state,
        pokemonSearch: { loading: false, data: [action.payload] },
      };

    case POKEMON_SEARCH_FAIL:
      return { ...state, pokemons: { loading: false, error: action.payload } };

    default:
      return state;
  }
};
