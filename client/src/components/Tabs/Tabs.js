import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonAditional } from "../../redux/actions";
import Evolution from "../Evolution/Evolution";
import "./Tabs.css";

function Tabs({ pokemon }) {
  const dispatch = useDispatch();
  const aditional = useSelector(
    (state) => state.rootReducer.pokemonAditional.data
  );
  const chain = useSelector((state) => state.rootReducer.pokemonChain.data);
  const [toggleState, setToggleState] = useState(1);

  useEffect(() => {
    dispatch(getPokemonAditional(pokemon.id));

    return () => {};
  }, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          About
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Base Stats
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Evolution
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
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

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <p>{aditional && aditional.description}</p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Evolution chain={chain} aditional={aditional} />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
