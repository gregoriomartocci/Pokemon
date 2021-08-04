/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from "react";
import Evolution_Card from "./Evolution_Card/Evolution_Card";
import Evolution_Trigger from "./Evolution_Trigger/Evolution_Trigger";
import "./Evolution.css";
import Loading from "../Loading/Loading";

function Evolution({ evolution }) {
  useEffect(() => {
    return () => {};
  }, []);

  console.log(evolution && evolution);

  return (
    <>
      {!evolution ? (
        <Loading />
      ) : evolution.evo_chain.length === 2 ? (
        <>
          <div className="evolution-row">
            <Evolution_Card pokemon={evolution.evo_pokemons[0]} />
            <Evolution_Trigger trigger={evolution.evo_chain[1]} />
            <Evolution_Card pokemon={evolution.evo_pokemons[1]} />
          </div>
        </>
      ) : evolution.evo_chain.length === 3 ? (
        <>
          <>
            <div className="evolution-row">
              <Evolution_Card pokemon={evolution.evo_pokemons[0]} />
              <Evolution_Trigger trigger={evolution.evo_chain[1]} />
              <Evolution_Card pokemon={evolution.evo_pokemons[1]} />
            </div>
          </>
          <div className="evolution-row">
            <>
              <div className="evolution-row">
                <Evolution_Card pokemon={evolution.evo_pokemons[1]} />
                <Evolution_Trigger trigger={evolution.evo_chain[2]} />
                <Evolution_Card pokemon={evolution.evo_pokemons[2]} />
              </div>
            </>
          </div>
        </>
      ) : evolution.evo_chain.length === 4 ? (
        <>
          <div className="evolution-row">
            <Evolution_Card pokemon={evolution.evo_pokemons[0]} />
            <Evolution_Trigger trigger={evolution.evo_chain[1]} />
            <Evolution_Card pokemon={evolution.evo_pokemons[1]} />
          </div>
          <div className="evolution-row">
            <Evolution_Card pokemon={evolution.evo_pokemons[1]} />
            <Evolution_Trigger trigger={evolution.evo_chain[2]} />
            <Evolution_Card pokemon={evolution.evo_pokemons[2]} />
          </div>
          <div className="evolution-row">
            <Evolution_Card pokemon={evolution.evo_pokemons[2]} />
            <Evolution_Trigger trigger={evolution.evo_chain[3]} />
            <Evolution_Card pokemon={evolution.evo_pokemons[3]} />
          </div>
        </>
      ) : (
        <p>This pokemon has no evolutions</p>
      )}
    </>
  );
}

export default Evolution;
