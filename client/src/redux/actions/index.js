import axios from "axios";
import dotenv from "dotenv";
import {
  POKEMONS_LIST_REQUEST,
  POKEMONS_LIST_SUCCESS,
  POKEMONS_LIST_FAIL,
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
    );
    dispatch({ type: POKEMONS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POKEMONS_LIST_FAIL, payload: error.message });
  }
};

/* export const detailsPokemon = (pokemonId) => async (dispatch) => {
  dispatch({ type: POKEMON_DETAILS_REQUEST });
  try {
    const { data } = axios.get(`${BASE_URL}+${pokemonId}`);
    dispatch({ type: POKEMON_DETAILS_SUCCESS, paylod: data });
  } catch (error) {
    dispatch({
      type: POKEMON_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}; */

/* function createPokemon(payload) {
  return { type: "CREATE_POKEMON", payload };
}

function deleteCreatedPokemon(payload) {}
 */