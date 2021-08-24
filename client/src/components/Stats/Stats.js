import React from "react";
import { percentage } from "../../utils";
import Loading from "../Loading/Loading";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Stats.css";

const data = ["HP", "ATTACK", "DEFENSE", "SP. ATK", "SP. DEF", "SPEED"];

function Stats({ stats }) {
  console.log("stats ====>", stats);

  // let total;
  // let average;

  // if (stats) {
  //   total = stats.reduce((a, b) => a + b.value, 0);
  //   average = stats.reduce((a, b, _, { length }) => {
  //     return a + b.value / length;
  //   }, 0);
  // }

  return (
    <>
      {!stats ? (
        <Loading />
      ) : (
        <div className="pokemon-stats">
          {stats.map((e, i) => (
            <div key={i} className="pokemon-stats-row">
              <span className="stat-label">{data[i]}</span>
              <span className="stat-value">{stats && e.value}</span>
              <ProgressBar done={Math.round(percentage(e.value, 230))} />
            </div>
          ))}
          {/* <div className="pokemon-stats-row ">
            <span className="stat-label">AVG</span>
            <span className="stat-value">
              {stats ? Math.round(average) : null}
            </span>
          </div>
          <div className="pokemon-stats-row ">
            <span className="stat-label">TOTAL</span>
            <span className="stat-value">{stats ? total : null}</span>
          </div> */}
        </div>
      )}
    </>
  );
}

export default Stats;
