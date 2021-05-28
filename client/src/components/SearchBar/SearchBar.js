/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./SearchBar.css";
import axios from "axios";
import dotenv from "dotenv";
import { FaSearch } from "react-icons/fa";

dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS, REACT_APP_TYPES } = process.env;

function searchBar() {
  const [input, setInput] = useState(""); //useState es una funcion que tiene el estado del input y el setInput es una funcion que sabe como modificar a la variable (Variable ---> input)

  const onChangeHandler = (e) => {
    setInput(e);
  };
  const onClickHandler = () => {
    axios
      .get(`${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}?name=${input}`)
      .then((response) => {
        console.log(response.data);
      });
    console.log(input);
  };

  return (
    <div className="search-bar">
      <div>
        <button
          type="submit"
          className="search-btn"
          onClick={() => {
            onClickHandler();
          }}
        >
          <FaSearch />
        </button>
      </div>

      <div className="input-container">
        <input
          value={input}
          placeholder="Ingrese el nombre de su pokemon"
          className="search-input"
          onChange={(e) => {
            //El onChanfe
            onChangeHandler(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default searchBar;
