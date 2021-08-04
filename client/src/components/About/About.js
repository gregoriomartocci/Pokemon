import React from "react";
import { capitalize } from "../../utils/index";
import "./About.css";
import Loading from "../Loading/Loading";

function About({ about }) {
  return (
    <>
      {!about ? (
        <Loading />
      ) : (
        <div className="about-container">
          <div className="about-top">
            <div className="description">{about.description}</div>
          </div>

          <div className="about-bot">
            <div className="about-bot-left">
              <legend className="about-legend">Breeding</legend>
              <div className="about-bot-left-container">
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
                    <li className="about-list value">{about.species}</li>
                    <li className="about-list value">{about.height}</li>
                    <li className="about-list value">{about.weight}</li>
                    <li className="about-list value">
                      {about.abilities.map((a, i) => (
                        <span key={i} className="about-ability">
                          {capitalize(a)}
                        </span>
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="about-bot-right">
              <legend className="about-legend">Aditional</legend>
              <div className="about-bot-left-container">
                <div className="about-left-col">
                  <ul>
                    <li className="about-list span">Egg Group</li>
                    <li className="about-list span">Habitat</li>
                    <li className="about-list span">Base Hapiness</li>
                  </ul>
                </div>
                <div className="about-rigth-col">
                  <ul>
                    <li className="about-list value">
                      {about.egg_groups.map((e) => e)}
                    </li>
                    <li className="about-list value">{about.habitat}</li>
                    <li className="about-list value">{about.base_hapiness}</li>
                    <li className="about-list value"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
