/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "./Icons.css";

function Icons({ input, setInput, types }) {
  const [icons, setIcons] = useState([
    { id: 0, name: "bug", img: "/icons/bug.svg", active: false },
    { id: 1, name: "dark", img: "/icons/dark.svg", active: false },
    { id: 2, name: "dragon", img: "/icons/dragon.svg", active: false },
    { id: 3, name: "electric", img: "/icons/electric.svg", active: false },
    { id: 4, name: "fire", img: "/icons/fire.svg", active: false },
    { id: 5, name: "fairy", img: "/icons/fairy.svg", active: false },
    { id: 6, name: "fighting", img: "/icons/fighting.svg", active: false },
    { id: 7, name: "flying", img: "/icons/flying.svg", active: false },
    { id: 8, name: "ghost", img: "/icons/ghost.svg", active: false },
    { id: 9, name: "grass", img: "/icons/grass.svg", active: false },
    { id: 10, name: "ground", img: "/icons/ground.svg", active: false },
    { id: 11, name: "ice", img: "/icons/ice.svg", active: false },
    { id: 12, name: "normal", img: "/icons/normal.svg", active: false },
    { id: 13, name: "poison", img: "/icons/poison.svg", active: false },
    { id: 14, name: "psychic", img: "/icons/psychic.svg", active: false },
    { id: 15, name: "rock", img: "/icons/rock.svg", active: false },
    { id: 16, name: "steel", img: "/icons/steel.svg", active: false },
    { id: 17, name: "water", img: "/icons/water.svg", active: false },
  ]);

  const hoverIn = (e, color) => {
    e.target.firstChild.className = `icon-img type-icon-${color}`;
  };

  const hoverOut = (e, active) => {
    if (!active) e.target.firstChild.className = "icon-img";
  };

  const onClickHandler = (id) => {
    let update = [...icons];
    update[id].active = !update[id].active;
    setIcons(update);
    let selectedTypes = icons.filter((t) => t.active === true);
    let dispatchTypes = [];
    (async () => {
      await selectedTypes.map((st) =>
        types.filter((t) => {
          if (t.name === st.name) {
            dispatchTypes = [...dispatchTypes, t];
          }
        })
      );
    })();
    
    setInput({ ...input, types: dispatchTypes });
  };

  return (
    <div className="types-icons">
      <ul className="types-icons-table">
        {icons.map((i) => (
          <li
            className="icon"
            key={i.id}
            onClick={() => onClickHandler(i.id)}
            onMouseEnter={(e) => hoverIn(e, i.name)}
            onMouseLeave={(e) => hoverOut(e, i.active)}
          >
            <img
              className={`icon-img ${i.active && `type-icon-${i.name}`}`}
              src={i.img}
              alt="icon-img"
            ></img>
            <span>{i.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Icons;
