/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonAditional } from "../../redux/actions";
import Evolution from "../Evolution/Evolution";
import Stats from "../Stats/Stats";
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
          <p>{aditional && aditional.description}</p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Stats pokemon={pokemon} />
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
