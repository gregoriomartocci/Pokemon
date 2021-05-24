import React, { useState } from "react";
import "./Navbar.css";
import axios from "axios";
import dotenv from "dotenv";
import { useDispatch } from "react-redux";
import { pokemonSearch } from "../../redux/actions";


dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS, REACT_APP_TYPES } = process.env;

function Navbar() {
  const dispatch = useDispatch ()

  const [input, setInput] = useState(""); //useState es una funcion que tiene el estado del input y el setInput es una funcion que sabe como modificar a la variable (Variable ---> input)

  const onChangeHandler = (e) => {
    setInput(e);
  };


  const onClickHandler = () => { //

    dispatch(pokemonSearch(input))
        
  };

  return (
    <div>
      <div className="Navbar">
        <h1>Soy un div </h1>
        <div className="searchBar">
          <div className="inputBusqueda">
            <input
              value={input} //Hay que conectar el input con el estado, para que tengan el mismo valor. Quiero que el valor sea el mismo del componente.
              placeholder="Ingrese el nombre de su pokemon"
              onChange={(e) => {
                //El onChange
                onChangeHandler(e.target.value);
              }}
            ></input>
          </div>
          <button
            type="submit"
            className="inputBottom"
            onClick={() => {
              onClickHandler();
            }}
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
