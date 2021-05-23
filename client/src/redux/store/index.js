import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { pokemonCreatedReducer, pokemonDetailsReducer, pokemonsReducer } from "../reducer/pokemonsReducers";

const initialState = {};
const reducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemonCreated: pokemonCreatedReducer,
  pokemonDetails: pokemonDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
