/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./SearchBar.css";
import dotenv from "dotenv";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { pokemonSearch } from "../../redux/actions";

dotenv.config();

function searchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState(""); //useState es una funcion que tiene el estado del input y el setInput es una funcion que sabe como modificar a la variable (Variable ---> input)

  const onChangeHandler = (e) => {
    setInput(e);
    dispatch(pokemonSearch(e));
  };

  return (
    <div className="search-bar">
      <div>
        <i className="search-icon">
          <HiOutlineSearch />
        </i>
      </div>

      <div className="input-container">
        <input
          value={input}
          placeholder="Search for pokemons!"
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
