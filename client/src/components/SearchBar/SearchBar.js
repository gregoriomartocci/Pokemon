/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./SearchBar.css";
import axios from "axios";
import dotenv from "dotenv";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getPokemons, pokemonSearch } from "../../redux/actions";
import { useHistory } from "react-router";

dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS, REACT_APP_TYPES } = process.env;

function searchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState(""); //useState es una funcion que tiene el estado del input y el setInput es una funcion que sabe como modificar a la variable (Variable ---> input)

  const onChangeHandler = (e) => {
    setInput(e);
  };

  const onClicKHandler = () => {
    dispatch(getPokemons(1, input));
  };

  return (
    <div className="search-bar">
      <div>
        <button type="submit" className="search-btn">
          <FaSearch onClick={(e) => onClicKHandler(e)} />
        </button>
      </div>

      <div className="input-container">
        <input
          value={input}
          placeholder="Ingrese el nombre de su pokemon"
          className="search-input"
          onChange={(e) => {
            onChangeHandler(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default searchBar;
