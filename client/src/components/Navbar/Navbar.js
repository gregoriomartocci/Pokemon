import React, { useState } from "react";
import "./Navbar.css";
import axios from "axios";
import dotenv from "dotenv";
import { useDispatch } from "react-redux";
import { pokemonSearch } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { SiPokemon } from "react-icons/si";

dotenv.config();

function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [input, setInput] = useState(""); //useState es una funcion que tiene el estado del input y el setInput es una funcion que sabe como modificar a la variable (Variable ---> input)

  const onChangeHandler = (e) => {
    setInput(e);
  };

  const onClickHandler = () => {
    //

    dispatch(pokemonSearch(input));
    history.push("/pokemon-results");
  };

  return (
    <div className="Navbar">
      <div className="logo">
        <SiPokemon />
      </div>
      <div className="create">Create</div>
    </div>
  );
}

export default Navbar;
