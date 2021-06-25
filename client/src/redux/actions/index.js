import axios from "axios";
import dotenv from "dotenv";
import ActionTypes from "../constants/pokemonConstants";

dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS, REACT_APP_TYPES } = process.env;

export const setPokemons = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.POKEMONS_LIST_REQUEST,
  });

  try {
    const { data } = await axios.get(
      `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}`
    );

    dispatch({ type: ActionTypes.POKEMONS_LIST_SUCCESS, payload: data });

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

    // Obtengo informacion detallada de los pokemons

    dispatch({
      type: ActionTypes.SET_POKEMONS_REQUEST,
    });
    try {
      dispatch({ type: ActionTypes.SET_POKEMONS_SUCCESS, payload: results });
    } catch (error) {
      dispatch({ type: ActionTypes.SET_POKEMONS_FAIL, payload: error.message });
    }
  } catch (error) {
    dispatch({ type: ActionTypes.POKEMONS_LIST_FAIL, payload: error.message });
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

export const clearFilters = () => (dispatch) => {
  dispatch({ type: ActionTypes.CLEAR_FILTERS });
};

export const createPokemon = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.POKEMON_CREATED_REQUEST,
  });
  try {
    const { data } = await axios.post(
      `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}`
    );
    dispatch({ type: ActionTypes.POKEMON_CREATED_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ActionTypes.POKEMON_CREATED_FAIL,
      payload: error.message,
    });
  }
};

export const getPokemonDetails = (pokemonId) => async (dispatch) => {
  dispatch({ type: ActionTypes.POKEMON_DETAILS_REQUEST });
  try {
    const { data } = await axios.get(
      `${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}/${pokemonId}`
    );
    console.log(data);
    dispatch({ type: ActionTypes.POKEMON_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ActionTypes.POKEMON_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const pokemonSearch = (payload) => async (dispatch) => {
  dispatch({ type: ActionTypes.POKEMONS_SEARCH, payload });
};

export const filterByType = (payload) => (dispatch) => {
  dispatch({ type: ActionTypes.FILTER_TYPE, payload });
};

export const sortBy = (payload) => (dispatch) => {
  dispatch({ type: ActionTypes.SORT, payload });
};
