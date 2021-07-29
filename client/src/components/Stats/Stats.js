import React from "react";
import { percentage } from "../../utils";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Stats.css";

const data = ["Hp", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"];

function Stats({ pokemon }) {
  const total = pokemon.stats.reduce((a, b) => a + b.base_stat, 0);

  const average = pokemon.stats.reduce(function (a, b, _, { length }) {
    return a + b.base_stat / length;
  }, 0);

  return (
    <div className="pokemon-stats">
      {pokemon.stats &&
        pokemon.stats.map((p, i) => (
          <div key={i} className="pokemon-stats-row">
            <span className="stat-label">{data[i]}</span>
            <span className="stat-value">{pokemon && p.base_stat}</span>
            <ProgressBar done={Math.round(percentage(p.base_stat, 125))} />
          </div>
        ))}
      <div className="pokemon-stats-row ">
        <span className="stat-label">Avg</span>
        <span className="stat-value">
          {pokemon ? Math.round(average) : null}
        </span>
      </div>
      <div className="pokemon-stats-row ">
        <span className="stat-label">Total</span>
        <span className="stat-value">{pokemon ? total : null}</span>
      </div>
    </div>
  );
}

export default Stats;
