import React from "react";
import "./MobileMenu.css";
import { IoCloseSharp } from "react-icons/io5";
import Accordion from "../Accordion/Accordion";
import { useSelector } from "react-redux";
import { sortItems, generationsItems } from "../Menu/Menu";

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
            <Accordion title="FILTER" elements={types} />
          </li>
          <li>
            <Accordion title="SORT" elements={sortItems} />
          </li>
          <li>
            <Accordion title="GENERATION" elements={generationsItems} />
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
