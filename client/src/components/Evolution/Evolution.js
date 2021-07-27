/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from "react";
import Evolution_Card from "./Evolution_Card/Evolution_Card";
import Evolution_Trigger from "./Evolution_Trigger/Evolution_Trigger";
import "./Evolution.css";

function Evolution({ chain, aditional }) {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      {chain && aditional && chain.length === 2 ? (
        <>
          <div className="evolution-row">
            <Evolution_Card pokemon={chain[0]} />
            <Evolution_Trigger trigger={aditional?.evolution_chain[1]} />
            <Evolution_Card pokemon={chain[1]} />
          </div>
        </>
      ) : chain.length === 3 ? (
        <>
          <>
            <div className="evolution-row">
              <Evolution_Card pokemon={chain[0]} />
              <Evolution_Trigger trigger={aditional?.evolution_chain[1]} />
              <Evolution_Card pokemon={chain[1]} />
            </div>
          </>
          <div className="evolution-row">
            <>
              <Evolution_Card pokemon={chain[1]} />
              <Evolution_Trigger trigger={aditional?.evolution_chain[2]} />
              <Evolution_Card pokemon={chain[2]} />
            </>
          </div>
        </>
      ) : chain.length === 4 ? (
        <>
          <div className="evolution-row">
            <Evolution_Card pokemon={chain[0]} />
            <Evolution_Trigger trigger={aditional?.evolution_chain[1]} />
            <Evolution_Card pokemon={chain[1]} />
          </div>
          <div className="evolution-row">
            <Evolution_Card pokemon={chain[1]} />
            <Evolution_Trigger trigger={aditional?.evolution_chain[2]} />
            <Evolution_Card pokemon={chain[2]} />
          </div>
          <div className="evolution-row">
            <Evolution_Card pokemon={chain[2]} />
            <Evolution_Trigger trigger={aditional?.evolution_chain[3]} />
            <Evolution_Card pokemon={chain[3]} />
          </div>
        </>
      ) : null}
    </>
  );
}

export default Evolution;
