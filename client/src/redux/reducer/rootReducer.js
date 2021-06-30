import { filterType, searchFilter, sort } from "../../utils";
import ActionTypes from "../constants/pokemonConstants";

const initialState = {
  allPokemons: { loading: true, data: [] },
  pokemons: { loading: true, data: [] },
  types: { loading: true, data: [] },
  pokemonCreated: { data: {} },
  loading: true,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // SET POKEMONS
    case ActionTypes.SET_POKEMONS_REQUEST:
      return {
        ...state,
        allPokemons: { loading: true },
      };

    case ActionTypes.SET_POKEMONS_SUCCESS:
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

    case ActionTypes.SET_POKEMONS_FAIL:
      return {
        ...state,
        allPokemons: { loading: false, error: action.payload },
        pokemons: { loading: false, error: action.payload },
      };

    // SET TYPES

    case ActionTypes.SET_TYPES_REQUEST:
      return {
        ...state,
        types: { loading: true },
      };

    case ActionTypes.SET_TYPES_SUCCESS:
      return {
        ...state,
        types: {
          loading: false,
          data: action.payload,
        },
        loading: false,
      };

    case ActionTypes.SET_TYPES_FAIL:
      return {
        ...state,
        types: {
          error: action.payload,
        },
      };

    // CREATE POKEMON

    case ActionTypes.POKEMON_CREATED_REQUEST:
      return { ...state, pokemonCreated: { loading: true } };

    case ActionTypes.POKEMON_CREATED_SUCCESS:
      return {
        ...state,
        pokemonCreated: { loading: false, data: action.payload },
      };

    case ActionTypes.POKEMON_CREATED_FAIL:
      return {
        ...state,
        pokemonCreated: { loading: false, error: action.payload },
      };

    // POKEMON DETAILS

    case ActionTypes.POKEMON_DETAILS_REQUEST:
      return { ...state, pokemonDetails: { loading: true } };

    case ActionTypes.POKEMON_DETAILS_SUCCESS:
      return {
        ...state,
        pokemonDetails: { loading: false, data: action.payload },
      };

    case ActionTypes.POKEMON_DETAILS_FAIL:
      return {
        ...state,
        pokemonDetails: { loading: false, error: action.payload },
      };

    // POKEMON SEARCH

    case ActionTypes.POKEMONS_SEARCH:
      return {
        ...state,
        pokemons: {
          loading: false,
          data: searchFilter(state.allPokemons.data, action.payload),
        },
      };

    // POKEMON FILTER

    case ActionTypes.FILTER_TYPE:
      return {
        ...state,
        pokemons: {
          loading: false,
          data: state.allPokemons.data.filter((e) =>
            filterType(e, action.payload)
          ),
        },
      };

    case ActionTypes.CLEAR_FILTERS:
      return {
        ...state,
        pokemons: {
          loading: false,
          data: state.allPokemons.data,
        },
      };

    case ActionTypes.SORT:
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
