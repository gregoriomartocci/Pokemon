/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetails } from "../../redux/actions";
import About from "../About/About";
import Evolution from "../Evolution/Evolution";
import Stats from "../Stats/Stats";
import "./Tabs.css";

function Tabs({ pokemon }) {
  const dispatch = useDispatch();
  const [toggleState, setToggleState] = useState(1);

  const details = useSelector((state) => state.rootReducer.pokemonDetails);

  useEffect(() => {
    dispatch(getPokemonDetails(pokemon.id));
    return () => {};
  }, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  details && console.log("DETAILSSS =====> ", details);

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
          <About about={!details.loading && details.data?.about} />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Stats stats={!details.loading && details.data?.stats} />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Evolution evolution={!details.loading && details.data?.evolution} />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
