import React from "react";
import { capitalize } from "../../utils";
import "./About.css";

function About({ pokemon }) {
  return (
    <div className="about-container">
      <div className="about-top">
        <div className="about-left-col">
          <ul className="about-list">
            <li className="about-list span">Species</li>
            <li className="about-list span">Height</li>
            <li className="about-list span">Weight</li>
            <li className="about-list span">Abilities</li>
          </ul>
        </div>

        <div className="about-rigth-col">
          <ul className="about-list">
            <li className="about-list value">a</li>
            <li className="about-list value">{pokemon.height}</li>
            <li className="about-list value">{pokemon.weight}</li>
            <li className="about-list value">
              {pokemon.abilities.map((a, i) => (
                <span key={i} className="about-ability">
                  {capitalize(a.ability.name)}
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <legend className="about-legend">Breeding</legend>

      <div className="about-bot">
        <div className="about-left-col">
          <ul>
            <li className="about-list span"></li>
            <li className="about-list span"></li>
            <li className="about-list span">Egg Group</li>
            <li className="about-list span">Egg Cycle</li>
          </ul>
        </div>
        <div className="about-rigth-col">
          <ul>
            <li className="about-list value"></li>
            <li className="about-list value"></li>
            <li className="about-list value"></li>
            <li className="about-list value"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
