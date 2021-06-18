import axios from "axios";
import dotenv from "dotenv";
import {
  SET_POKEMONS_REQUEST,
  SET_POKEMONS_SUCCESS,
  SET_POKEMONS_FAIL,
  POKEMONS_LIST_REQUEST,
  POKEMONS_LIST_SUCCESS,
  POKEMONS_LIST_FAIL,
  POKEMON_CREATED_REQUEST,
  POKEMON_CREATED_SUCCESS,
  POKEMON_CREATED_FAIL,
  POKEMON_DETAILS_REQUEST,
  POKEMON_DETAILS_SUCCESS,
  POKEMON_DETAILS_FAIL,
  POKEMON_SEARCH_REQUEST,
  POKEMON_SEARCH_SUCCESS,
  POKEMON_SEARCH_FAIL,
  FILTER_TYPE,
  CLEAR_FILTERS,
} from "../constants/pokemonConstants";

dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS } = process.env;

export const setPokemons = () => async (dispatch) => {
  dispatch({
    type: POKEMONS_LIST_REQUEST,
  });

  try {
    const { data } = await axios.get(
      `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}`
    );

    dispatch({ type: POKEMONS_LIST_SUCCESS, payload: data });

    const getPokemonData = async (name) => {
      try {
        let url = `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}/${name}`;
        const response = await axios.get(url);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    };

    const promises = data.map(async (pokemon) => {
      return await getPokemonData(pokemon.name);
    });

    const results = await Promise.all(promises);

    dispatch({
      type: SET_POKEMONS_REQUEST,
    });
    try {
      dispatch({ type: SET_POKEMONS_SUCCESS, payload: results });
    } catch (error) {
      dispatch({ type: SET_POKEMONS_FAIL, payload: error.message });
    }
  } catch (error) {
    dispatch({ type: POKEMONS_LIST_FAIL, payload: error.message });
  }
};

export const clearFilters = () => (dispatch) => {
  dispatch({ type: CLEAR_FILTERS });
};


export const createPokemon = () => async (dispatch) => {
  dispatch({
    type: POKEMON_CREATED_REQUEST,
  });
  try {
    const { data } = await axios.post(
      `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}`
    );
    dispatch({ type: POKEMON_CREATED_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POKEMON_CREATED_FAIL, payload: error.message });
  }
};

export const getPokemonDetails = (pokemonId) => async (dispatch) => {
  dispatch({ type: POKEMON_DETAILS_REQUEST });
  try {
    const { data } = await axios.get(
      `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}/${pokemonId}`
    );
    console.log(data);
    dispatch({ type: POKEMON_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POKEMON_DETAILS_FAIL, payload: error.message });
  }
};

export const pokemonSearch = (pokemonName) => async (dispatch) => {
  dispatch({ type: POKEMON_SEARCH_REQUEST });
  try {
    const { data } = await axios.get(
      `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}/?name=${pokemonName}`
    );
    dispatch({ type: POKEMON_SEARCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POKEMON_SEARCH_FAIL, payload: error.message });
  }
};

export const filterByType = (filter) => (dispatch) => {
  dispatch({ type: FILTER_TYPE, payload: filter });
};
