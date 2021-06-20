import { filterType, searchFilter, sort } from "../../utils";
import {
  POKEMON_CREATED_REQUEST,
  POKEMON_CREATED_SUCCESS,
  POKEMON_CREATED_FAIL,
  POKEMON_DETAILS_REQUEST,
  POKEMON_DETAILS_SUCCESS,
  POKEMON_DETAILS_FAIL,
  SET_POKEMONS_REQUEST,
  SET_POKEMONS_SUCCESS,
  SET_POKEMONS_FAIL,
  FILTER_TYPE,
  CLEAR_FILTERS,
  SORT,
  POKEMONS_SEARCH,
} from "../constants/pokemonConstants";

const initialState = {
  allPokemons: { loading: true, data: [] },
  pokemons: { loading: true, data: [] },
  pokemonSearch: { loading: true, data: [] },
  pokemonDetails: { loading: true, data: {} },
};

export const rootReducer = (state = initialState, action) => {
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
        allPokemons: {
          loading: false,
          data: action.payload,
        },
        pokemons: {
          loading: false,
          data: action.payload,
        },
      };

    case SET_POKEMONS_FAIL:
      return {
        ...state,
        allPokemons: { loading: false, error: action.payload },
        pokemons: { loading: false, error: action.payload },
      };

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

    case POKEMONS_SEARCH:
      return {
        ...state,
        pokemons: {
          loading: false,
          data: searchFilter(state.allPokemons.data, action.payload),
        },
      };

    // POKEMON FILTER

    case FILTER_TYPE:
      return {
        ...state,
        pokemons: {
          loading: false,
          data: state.allPokemons.data.filter((e) =>
            filterType(e, action.payload)
          ),
        },
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        pokemons: {
          loading: false,
          data: state.allPokemons.data,
        },
      };

    case SORT:
      return {
        ...state,
        pokemons: {
          loading: false,
          data: sort(state.pokemons.data, action.payload),
        },
      };

    default:
      return state;
  }
};
