/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Menu.css";
import Dropdown from "../Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { filterByType, sortBy } from "../../redux/actions";

const sortItems = [
  { id: 1, name: "name" },
  { id: 2, name: "z-a" },
  { id: 3, name: "attack" },
  { id: 4, name: "defense" },
  { id: 5, name: "hp" },
  { id: 6, name: "speed" },
  { id: 7, name: "weight" },
  { id: 8, name: "height" },
];

function Menu() {
  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState([]);
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.rootReducer.pokemons.data);
  const types = useSelector((state) => state.rootReducer.types.data);

  useEffect(() => {
    var array = [];
    filter.map((e) => (array = [...array, e.name.toLowerCase()])); // aca reemplazo el arreglo
    pokemons && dispatch(filterByType(array));
    return () => {};
  }, [filter]);

  useEffect(() => {
    sort[0] && dispatch(sortBy(sort[0].name));
    return () => {};
  }, [sort]);

  return (
    <div className="menu">
      <SearchBar />
      <div className="filter-sort">
        <div className="filter">
          {/* <HiOutlineAdjustments /> */}
          <Dropdown
            title="Type"
            items={types && types}
            multiselect
            selection={filter}
            setSelection={setFilter}
          ></Dropdown>
        </div>
        <div className="sort">
          <Dropdown
            title="Sort"
            items={sortItems}
            selection={sort}
            setSelection={setSort}
          ></Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Menu;
