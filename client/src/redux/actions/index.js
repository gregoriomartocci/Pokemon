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
} from "../constants/pokemonConstants";

dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS } = process.env;

export const getPokemons = () => async (dispatch) => {
  dispatch({
    type: POKEMONS_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get(
      `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}`
    );console.log(data, "holaaaa")
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

export const pokemonDetails = (pokemonId) => async (dispatch) => {
   dispatch({ type: POKEMON_DETAILS_REQUEST });
  try {
    const { data } = await axios.get(
      `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}/${pokemonId}`
    );
    console.log(data)
    dispatch({ type: POKEMON_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POKEMON_DETAILS_FAIL, payload: error.message });
  }
};


