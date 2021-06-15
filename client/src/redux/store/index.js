import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  pokemonCreatedReducer,
  pokemonDetailsReducer,
  pokemonSearchReducer,
  pokemonsReducer,
} from "../reducer/pokemonsReducers";

const initialState = {};
const reducer = combineReducers({
  pokemonsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
