import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Menu.css";

import { BiSortUp } from "react-icons/bi";
import { HiOutlineViewGrid } from "react-icons/hi";
import Dropdown from "../Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { filterByType } from "../../redux/actions";

const types = [
  { id: 1, name: "water" },
  { id: 2, name: "grass" },
  { id: 3, name: "poison" },
  { id: 4, name: "fire" },
  { id: 5, name: "ghost" },
  { id: 6, name: "dark" },
];

const sortItems = [
  { id: 1, name: "a-z" },
  { id: 2, name: "z-a" },
  { id: 3, name: "attack" },
  { id: 4, name: "defense" },
  { id: 5, name: "hp" },
  { id: 6, name: "weight" },
];

function Menu() {
  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState([]);
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.rootReducer.pokemons.data);

  useEffect(() => {
    // console.log(filter);

    var array = [];
    filter.map((e) => (array = [...array, e.name.toLowerCase()])); // aca reemplazo el arreglo

    if (pokemons) {
      dispatch(filterByType(array));
    }

    return () => {};
  }, [filter]);

  return (
    <div className="menu">
      <SearchBar />
      <div className="filter-sort">
        <div className="filter">
          {/* <HiOutlineAdjustments /> */}
          <Dropdown
            title="Type"
            items={types}
            multiselect
            selection={filter}
            setSelection={setFilter}
          ></Dropdown>
        </div>
        <div className="sort">
          <Dropdown
            title="Sort"
            items={sortItems}
            multiselect
            selection={sort}
            setSelection={setSort}
          ></Dropdown>
        </div>
        <div className="view">
          <HiOutlineViewGrid />
        </div>
        <div className="sort">
          <BiSortUp />
        </div>
      </div>
    </div>
  );
}

export default Menu;
