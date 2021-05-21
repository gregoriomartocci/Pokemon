import react, { useState } from "react";
import "./Navbar.css";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const { REACT_APP_BASE_URL, REACT_APP_POKEMONS, REACT_APP_TYPES } = process.env;

function Navbar() {
const [input, setInput] = useState("") 

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
            <input value={input}
              placeholder="Ingrese el nombre de su pokemon"
              onChange={(e) => {
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

export default Navbar;
