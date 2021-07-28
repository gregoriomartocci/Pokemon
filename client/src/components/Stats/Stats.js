import React from "react";
import { capitalize, percentage } from "../../utils";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Stats.css";

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
            <span className="stat-label">
              {pokemon && capitalize(p.stat.name.replace(/-/g, " "))}
            </span>
            <ProgressBar done={percentage(p.base_stat, 125).toFixed(2)} />
            <span className="stat-value">{pokemon && p.base_stat}</span>
          </div>
        ))}
      <div className="pokemon-stats-row">
        <span className="stat-label">Total</span>
        <span className="stat-value">{pokemon ? total : null}</span>
      </div>
      <div className="pokemon-stats-row">
        <span className="stat-label">Average</span>
        <span className="stat-value">
          {pokemon ? average.toFixed(2) : null}
        </span>
      </div>
    </div>
  );
}

export default Stats;
