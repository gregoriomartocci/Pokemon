import axios from "axios";
import dotenv from "dotenv";
import {
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
} from "../constants/pokemonConstants";

dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS } = process.env;

export const getPokemons = (page, name) => async (dispatch) => {
  dispatch({
    type: POKEMONS_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get(
      `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}?page=${page}&name=${name}`
    );
    dispatch({ type: POKEMONS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POKEMONS_LIST_FAIL, payload: error.message });
  }
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
  console.log(pokemonName);
  try {
    const { data } = await axios.get(
      `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}/?name=${pokemonName}`
    );
    console.log(data, "ok");
    dispatch({ type: POKEMON_SEARCH_SUCCESS, payload: data });
  } catch (error) {
    console.log("no se encontro");
    dispatch({ type: POKEMON_SEARCH_FAIL, payload: error.message });
  }
};
