import React from "react";
import "./Icons.css";

export const icons = [
  { name: "bug", img: "/icons/bug.svg" },
  { name: "dark", img: "/icons/dark.svg" },
  { name: "dragon", img: "/icons/dragon.svg" },
  { name: "electric", img: "/icons/electric.svg" },
  { name: "fire", img: "/icons/fire.svg" },
  { name: "fairy", img: "/icons/fairy.svg" },
  { name: "fighting", img: "/icons/fighting.svg" },
  { name: "flying", img: "/icons/flying.svg" },
  { name: "ghost", img: "/icons/ghost.svg" },
  { name: "grass", img: "/icons/grass.svg" },
  { name: "ground", img: "/icons/ground.svg" },
  { name: "ice", img: "/icons/ice.svg" },
  { name: "normal", img: "/icons/normal.svg" },
  { name: "poison", img: "/icons/poison.svg" },
  { name: "rock", img: "/icons/rock.svg" },
  { name: "steel", img: "/icons/steel.svg" },
  { name: "water", img: "/icons/water.svg" },
];

function Icons() {
  return (
    <div className="types-icons-container">
      <div className="types-icons">
        <ul className="types-icons-table">
          {icons.map((i, index) => (
            <li className="icon" key={index}>
              <img
                className={`type-icon-${i.name}`}
                src={i.img}
                alt="icon-img"
              ></img>
              <span>{i.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Icons;
