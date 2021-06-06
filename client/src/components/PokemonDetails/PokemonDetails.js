import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetails } from "../../redux/actions";
import "./PokemonDetails.css";
import { Link, useParams } from "react-router-dom";

function PokemonDetails({ showModal, setShowModal, pokemon }) {
  return (
    <>
      {showModal ? (
        <div className="modal-container">
          <div
            className={`pokemon-details ${
              pokemon ? pokemon.types && pokemon.types[0].type.name : null
            }`}
          >
            <div className={`top-content`}>
              <div className="top-butttons">
                <div></div>
                <div></div>
              </div>
              <div className="top-info">
                <div>
                  <div className="pokemon-name">{pokemon && pokemon.name}</div>
                  <div className="pokemon-types">
                    {pokemon
                      ? pokemon.types && (
                          <span
                            className={`pokemon-type  ${
                              pokemon.types && pokemon.types[0].type.name
                            }`}
                          >
                            {pokemon.types[0].type.name}
                          </span>
                        )
                      : null}
                    {pokemon
                      ? pokemon.types &&
                        pokemon.types[1] && (
                          <span
                            className={`pokemon-type ${
                              pokemon.types && pokemon.types[1].type.name
                            }`}
                          >
                            {pokemon.types[1].type.name}
                          </span>
                        )
                      : null}
                  </div>
                </div>
                <div>{pokemon.id}</div>
              </div>
            </div>

            <div className="bottom-content">
              <div className="modal-img">
                <img
                  src={
                    pokemon
                      ? pokemon.sprites && pokemon.sprites.front_default
                      : "null"
                  }
                  className="img"
                  alt="pokemon-img"
                ></img>
              </div>
              Nombre:{pokemon && pokemon.name}
              <br></br>
              {pokemon
                ? pokemon.types && (
                    <span>Tipo:{pokemon.types[0].type.name}</span>
                  )
                : ""}
              {pokemon
                ? pokemon.types &&
                  pokemon.types[1] &&
                  pokemon.types[1].type.name
                : "null"}
              <br></br>
              <span>Vida:</span>
              {pokemon ? pokemon.stats && pokemon.stats[0].base_stat : ""}
              <br></br>
              <span>Fuerza:</span>
              {pokemon ? pokemon.stats && pokemon.stats[1].base_stat : ""}
              <br></br>
              <span>Defensa:</span>
              {pokemon ? pokemon.stats && pokemon.stats[2].base_stat : ""}
              <br></br>
              <span>Velocidad:</span>
              {pokemon ? pokemon.stats && pokemon.stats[5].base_stat : ""}
              <br></br>
              <span>Altura:</span>
              {pokemon ? pokemon && pokemon.height : ""}
              <br></br>
              <span>Peso:</span>
              {pokemon ? pokemon.weight : ""}
              <br></br>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PokemonDetails;
