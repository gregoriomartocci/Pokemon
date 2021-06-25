import React, { useCallback, useEffect, useRef } from "react";
import { capitalize } from "../../utils";
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
                  src={
                    pokemon &&
                    pokemon.sprites.other["official-artwork"].front_default
                  }
                  alt="pokemon-img"
                ></img>
              </div>
            </div>

            <div className="right-content">
              <div className="pokemon-info">
                <div className="top-info">
                  <div className="pokemon-types">
                    {pokemon && (
                      <span
                        className={`pokemon-type  ${pokemon.types[0]?.type.name}`}
                      >
                        {pokemon.types[0]?.type.name}
                      </span>
                    )}
                    {pokemon && (
                      <span
                        className={`pokemon-type ${pokemon.types[1]?.type.name}`}
                      >
                        {pokemon.types[1]?.type.name}
                      </span>
                    )}
                  </div>
                  <div>{pokemon && pokemon.id}</div>
                </div>

                <div className="name">
                  {pokemon && capitalize(pokemon.name)}
                </div>

                <div>
                  <title>Base Stats</title>
                </div>

                <div className="pokemon-stats">
                  <div className="pokemon-stats-labels">
                    <span className="label">HP</span>
                    <span className="label">STRENGH</span>
                    <span className="label">DEFENSE</span>
                    <span className="label">SPEED</span>
                    <span className="label">HEIGHT</span>
                    <span className="label">WEIGHT</span>
                  </div>
                  <div className="pokemon-stats-values">
                    <span className="value">
                      {pokemon && pokemon.stats[0]?.base_stat}
                    </span>
                    <span className="value">
                      {pokemon && pokemon.stats[1]?.base_stat}
                    </span>
                    <span className="value">
                      {pokemon && pokemon.stats[2]?.base_stat}
                    </span>
                    <span className="value">
                      {pokemon.stats && pokemon.stats[5]?.base_stat}
                    </span>
                    <span className="value">{pokemon && pokemon.height}</span>
                    <span className="value">{pokemon && pokemon.weight}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PokemonDetails;
