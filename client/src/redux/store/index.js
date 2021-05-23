import { Store } from "@material-ui/icons";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {pokemonsReducers, pokemonsDetailsReducers } from "../reducer/pokemonsReducers"

const initialState = {};
const reducer = combineReducers({
    pokemons: pokemonsReducers,
    pokemonsDetails: pokemonsDetailsReducers,
})




const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
