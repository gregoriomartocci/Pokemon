import React, { useState } from "react";
import "./MobileMenu.css";
import { IoCloseSharp } from "react-icons/io5";
import Accordion from "../Accordion/Accordion";
import { useSelector } from "react-redux";
import { sortItems, generationsItems } from "../Menu/Menu";

function MobileMenu({ setActive }) {
  const types = useSelector((state) => state.rootReducer.types.data);
  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState([]);
  const [generation, setGeneration] = useState([
    { id: 1, name: "I", value: [1, 151], loaded: true },
  ]);
  const [open, setOpen] = useState({ filter: false, sort: false, gen: false });

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
            <Accordion
              title="FILTER"
              elements={types.length && types}
              selection={filter}
              setSelection={setFilter}
              open={open}
              setOpen={setOpen}
              value="filter"
            />
          </li>
          <li>
            <Accordion
              title="SORT"
              elements={sortItems}
              selection={sort}
              setSelection={setSort}
              open={open}
              setOpen={setOpen}
              value="sort"
            />
          </li>
          <li>
            <Accordion
              title="GENERATION"
              elements={generationsItems}
              selection={generation}
              setSelection={setGeneration}
              open={open}
              setOpen={setOpen}
              value="gen"
            />
          </li>
          <li className="mobile-menu-option">
            <div className="mobile-menu-option-toggle">
              <div className="mobile-menu-option-toggle-api">api</div>
              <div className="mobile-menu-option-toggle-item">db</div>
            </div>
          </li>
          <li className="mobile-menu-option">Reset Filters</li>
          <li className="mobile-menu-option">
            <div className="mobile-menu-option-create">Create</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
