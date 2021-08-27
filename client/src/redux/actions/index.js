import axios from "axios";
import dotenv from "dotenv";
import ActionTypes from "../constants/pokemonConstants";

dotenv.config();

const {
  REACT_APP_BASE_URL,
  REACT_APP_POKEMONS,
  REACT_APP_TYPES,
  REACT_APP_DETAILS,
} = process.env;

// SET POKEMONS

export const setUp = () => async (dispatch) => {
  // Busco los Pokemons

  dispatch({
    type: ActionTypes.SET_POKEMONS_REQUEST,
  });
  try {
    const { data } = await axios.get(
      `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}`
    );
    dispatch({ type: ActionTypes.SET_POKEMONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ActionTypes.SET_POKEMONS_FAIL, payload: error.message });
  }

  // Busco los types

  dispatch({
    type: ActionTypes.SET_TYPES_REQUEST,
  });
  try {
    const { data } = await axios.get(`${REACT_APP_BASE_URL}${REACT_APP_TYPES}`);
    dispatch({ type: ActionTypes.SET_TYPES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ActionTypes.SET_TYPES_FAIL, payload: error.message });
  }
};

// CLEAR FILTERS

export const clearFilters = () => (dispatch) => {
  dispatch({ type: ActionTypes.CLEAR_FILTERS });
};

// CREATE POKEMON

export const createPokemon = (pokemon) => async (dispatch) => {
  dispatch({
    type: ActionTypes.POKEMON_CREATED_REQUEST,
  });
  try {
    const { data } = await axios.post(
      `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}`,
      pokemon
    );
    dispatch({ type: ActionTypes.POKEMON_CREATED_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ActionTypes.POKEMON_CREATED_FAIL,
      payload: error.message,
    });
  }
};

// GET POKEMON DETAILS

export const getPokemonDetails = (pokemonId) => async (dispatch) => {
  console.log(
    `LA URL PARA PEDIR DETALLES${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}/${REACT_APP_DETAILS}/${pokemonId}`
  );
  dispatch({ type: ActionTypes.POKEMON_DETAILS_REQUEST });

  try {
    const { data } = await axios.get(
      `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}/${REACT_APP_DETAILS}/${pokemonId}`
    );

    dispatch({ type: ActionTypes.POKEMON_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ActionTypes.POKEMON_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

// GET GEN

export const getGen = (payload) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_GEN_REQUEST, payload });

  console.log("aguante la papilla", payload);

  try {
    const { data } = await axios.get(
      `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}?offset=${payload[0]}&limit=${payload[1]}&api_only=true`
    );
    dispatch({ type: ActionTypes.GET_GEN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_GEN_FAIL, payload: error.message });
  }
};

// POKEMON SEARCH

export const pokemonSearch = (payload) => async (dispatch) => {
  dispatch({ type: ActionTypes.POKEMONS_SEARCH, payload });
};

// POKEMON FILTER BY GEN

export const filterByGen = (payload) => async (dispatch) => {
  dispatch({ type: ActionTypes.FILTER_GEN, payload });
};

// FITER BY TYPE

export const filterByType = (payload) => (dispatch) => {
  dispatch({ type: ActionTypes.FILTER_TYPE, payload });
};

// ONLY DB

export const filterByDB = () => (dispatch) => {
  dispatch({ type: ActionTypes.FILTER_DB });
};

// ONLY API

export const filterByAPI = () => (dispatch) => {
  dispatch({ type: ActionTypes.FILTER_API });
};

// SORT BY

export const sortBy = (payload) => (dispatch) => {
  dispatch({ type: ActionTypes.SORT, payload });
};
