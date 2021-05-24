import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonDetails } from "../../redux/actions";
import "./PokemonDetails.css";
import { Link, useParams } from "react-router-dom";

function PokemonDetails() {
  const pokemonData = useSelector((state) => state.pokemonDetails.pokemonDetails);
  const dispatch = useDispatch();
  const { num } = useParams();

  useEffect(() => {
    dispatch(pokemonDetails(num));
  }, []);
  console.log(pokemonData, 'ok')
  return (
    <div className="pokemonDetails">
      <img
        src={
          pokemonData
            ? pokemonData.sprites && pokemonData.sprites.front_default
            : "null"
        }
      ></img>
      Nombre:{pokemonData && pokemonData.name}
      <br></br>
      {pokemonData
        ? pokemonData.types && (
            <span>type:{pokemonData.types[0].type.name}</span>
          )
        : ""}
      {pokemonData
        ? pokemonData.types &&
          pokemonData.types[1] &&
          pokemonData.types[1].type.name
        : "null"}
    </div>
  );
}

export default PokemonDetails;
