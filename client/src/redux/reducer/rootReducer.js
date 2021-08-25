import {
  filterType,
  genFiltering,
  onlyAPI,
  onlyDB,
  searchFilter,
  sort,
} from "../../utils";
import ActionTypes from "../constants/pokemonConstants";

const initialState = {
  allPokemons: { data: [] },
  pokemons: { data: [] },
  types: { data: [] },
  pokemonCreated: { data: {} },
  pokemonDetails: { data: {} },
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
        allPokemons: { data: [action.payload, ...state.pokemons.data] },
        pokemons: { data: [action.payload, ...state.pokemons.data] },
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

    // POKEMON GEN

    case ActionTypes.GET_GEN_REQUEST:
      return {
        ...state,
        allPokemons: { loading: true, data: state.allPokemons.data },
        loading: true,
      };
    case ActionTypes.GET_GEN_SUCCESS:
      return {
        ...state,
        allPokemons: {
          data: [...state.allPokemons.data, ...action.payload],
          loading: false,
        },
        loading: false,
      };
    case ActionTypes.GET_GEN_FAIL:
      return {
        ...state,
        allPokemons: { loading: false, error: action.payload },
        loading: false,
      };

    // POKEMON SEARCH

    case ActionTypes.POKEMONS_SEARCH:
      return {
        ...state,
        pokemons: {
          data: searchFilter(state.allPokemons.data, action.payload),
        },
      };

    // POKEMON FILTER

    case ActionTypes.FILTER_TYPE:
      return {
        ...state,
        pokemons: {
          data: state.allPokemons.data.filter((e) =>
            filterType(e, action.payload)
          ),
        },
      };

    // POKEMON FILTER GEN

    case ActionTypes.FILTER_GEN:
      return {
        ...state,
        pokemons: {
          data: genFiltering(state.allPokemons.data, action.payload),
        },
      };

    // CLEAR FILTER

    case ActionTypes.CLEAR_FILTERS:
      return {
        ...state,
        pokemons: {
          data: state.allPokemons.data,
        },
      };

    // ONLY API

    case ActionTypes.FILTER_API:
      return {
        ...state,
        pokemons: {
          data: state.allPokemons.data.filter((p) => onlyAPI(p.id)),
        },
      };

    // ONLY db

    case ActionTypes.FILTER_DB:
      return {
        ...state,
        pokemons: {
          data: state.allPokemons.data.filter((p) => onlyDB(p.id)),
        },
      };

    // POKEMON SORT

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
