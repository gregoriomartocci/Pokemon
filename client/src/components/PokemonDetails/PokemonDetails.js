import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetails } from "../../redux/actions";
import "./PokemonDetails.css";
import { Link, useParams } from "react-router-dom";

function PokemonDetails() {
  const pokemonData = useSelector((state) => state.pokemons.pokemonDetails);
  var pokemonDetails = {};
  if (pokemonData) {
    pokemonDetails = pokemonData.data;
    console.log(pokemonDetails, "ok")
  }
  const dispatch = useDispatch();
  const { num } = useParams();

  useEffect(() => {
    dispatch(getPokemonDetails(num));
  }, []);

  return (
    <div className="pokemonDetails">
      <img
        src={
          pokemonDetails
            ? pokemonDetails.sprites && pokemonDetails.sprites.front_default
            : "null"
        }
      ></img>
      Nombre:{pokemonDetails && pokemonDetails.name}
      <br></br>
      {pokemonDetails
        ? pokemonDetails.types && (
            <span>Tipo:{pokemonDetails.types[0].type.name}</span>
          )
        : ""}
      {pokemonDetails
        ? pokemonDetails.types &&
          pokemonDetails.types[1] &&
          pokemonDetails.types[1].type.name
        : "null"}
      <br></br>
      <span>Vida:</span>
      {pokemonDetails
        ? pokemonDetails.stats && pokemonDetails.stats[0].base_stat
        : ""}
      <br></br>
      <span>Fuerza:</span>
      {pokemonDetails
        ? pokemonDetails.stats && pokemonDetails.stats[1].base_stat
        : ""}
      <br></br>
      <span>Defensa:</span>
      {pokemonDetails
        ? pokemonDetails.stats && pokemonDetails.stats[2].base_stat
        : ""}
      <br></br>
      <span>Velocidad:</span>
      {pokemonDetails
        ? pokemonDetails.stats && pokemonDetails.stats[5].base_stat
        : ""}
      <br></br>
      <span>Altura:</span>
      {pokemonDetails ? pokemonDetails && pokemonDetails.height : ""}
      <br></br>
      <span>Peso:</span>
      {pokemonDetails ? pokemonDetails.weight : ""}
      <br></br>
    </div>
  );
}

export default PokemonDetails;
