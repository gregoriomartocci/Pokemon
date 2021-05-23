import React, { useState } from "react";
import "./SearchBar.css";
import axios from "axios";
import dotenv from "dotenv";


dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS, REACT_APP_TYPES } = process.env;

function searchBar() {
const [input, setInput] = useState("")  //useState es una funcion que tiene el estado del input y el setInput es una funcion que sabe como modificar a la variable (Variable ---> input)

    const onChangeHandler = (e) =>{
        setInput(e) 
    }
    const onClickHandler = ()=>{
        axios.get(`${REACT_APP_BASE_URL}${REACT_APP_POKEMONS}?name=${input}`).then(response=>{
            console.log(response.data)
        }) 
        console.log(input)
    }


  return (
    <div>
      <div className="Navbar">
        <h1>Soy un div </h1>
        <div className="searchBar">
          <div className="inputBusqueda">
            <input value={input} //Hay que conectar el input con el estado, para que tengan el mismo valor. Quiero que el valor sea el mismo del componente.
              placeholder="Ingrese el nombre de su pokemon"
              onChange={(e) => { //El onChanfe
                onChangeHandler(e.target.value);
              }}
            ></input>
          </div>
          <button type="submit" className="inputBottom" onClick={()=>{onClickHandler()}}>Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default searchBar;