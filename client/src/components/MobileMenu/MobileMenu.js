import React from "react";
import "./MobileMenu.css";
import { IoCloseSharp } from "react-icons/io5";
import Accordion from "../Accordion/Accordion";
import { useSelector } from "react-redux";

const sortItems = [
  { id: 1, name: "a - z", value: "name" },
  { id: 2, name: "z - a", value: "name" },
  { id: 3, name: "attack", value: "attack" },
  { id: 4, name: "defense", value: "defense" },
  { id: 5, name: "hp", value: "hp" },
  { id: 6, name: "speed", value: "speed" },
  { id: 7, name: "weight", value: "weight" },
  { id: 8, name: "height", value: "height" },
  { id: 9, name: "sp. atk", value: "special-attack" },
  { id: 10, name: "sp. def", value: "special-defense" },
];

const generationsItems = [
  { id: 1, name: "I", value: [1, 151], loaded: true },
  { id: 2, name: "II", value: [152, 251], loaded: false },
  { id: 3, name: "III", value: [252, 386], loaded: false },
  { id: 4, name: "IV", value: [387, 494], loaded: false },
  { id: 5, name: "V", value: [495, 649], loaded: false },
  { id: 6, name: "VI", value: [650, 721], loaded: false },
  { id: 7, name: "VII", value: [722, 809], loaded: false },
  { id: 8, name: "VIII", value: [810, 899], loaded: false },
];

function MobileMenu({ setActive }) {
  const types = useSelector((state) => state.rootReducer.types.data);

  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu">
        <i
          className="mobile-menu-cancel"
          onClick={() => setActive((prev) => !prev)}
        >
          <IoCloseSharp />
        </i>
        <ul className="mobile-menu-options">
          <li>
            <Accordion title="Filter" elements={types} />
          </li>
          <li>
            <Accordion title="Sort" elements={sortItems} />
          </li>
          <li>
            <Accordion title="Generation" elements={generationsItems} />
          </li>
          <li className="mobile-menu-option">Reset Filters</li>
          <li className="mobile-menu-option">
            <div className="mobile-menu-option-toggle">
              <div className="mobile-menu-option-toggle-api">api</div>
              <div className="mobile-menu-option-toggle-item">db</div>
            </div>
          </li>
          <li className="mobile-menu-option">
            <div className="mobile-menu-option-create">Create</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
