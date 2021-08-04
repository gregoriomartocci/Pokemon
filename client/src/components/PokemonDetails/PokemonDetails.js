import React, { useCallback, useEffect, useRef } from "react";
import { capitalize } from "../../utils";
import Tabs from "../Tabs/Tabs";
import "./PokemonDetails.css";

function PokemonDetails({ showModal, setShowModal, pokemon }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      {showModal ? (
        <div className="modal-container" ref={modalRef} onClick={closeModal}>
          <div className="pokemon-details">
            <div className="left-content">
              <div className="modal-img">
                <img
                  className="img"
                  src={pokemon && pokemon.img}
                  alt="pokemon-img"
                ></img>
              </div>
            </div>

            <div className="right-content">
              <div className="pokemon-info">
                <div className="top-info">
                  <div className="pokemon-types">
                    {pokemon && (
                      <span className={`pokemon-type  ${pokemon.types[0]}`}>
                        {pokemon.types[0]}
                      </span>
                    )}
                    {pokemon && (
                      <span className={`pokemon-type ${pokemon.types[1]}`}>
                        {pokemon.types[1]}
                      </span>
                    )}
                  </div>
                  <div>{pokemon && pokemon.id}</div>
                </div>

                <div className="name">
                  {pokemon && capitalize(pokemon.name)}
                </div>

                <Tabs pokemon={pokemon} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PokemonDetails;
