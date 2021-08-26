/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Menu.css";
import Dropdown from "../Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { filterByGen, filterByType, getGen, sortBy } from "../../redux/actions";
import Toggle from "../Toggle/Toggle";

const sortItems = [
  { id: 1, name: "name" },
  { id: 3, name: "attack" },
  { id: 4, name: "defense" },
  { id: 5, name: "hp" },
  { id: 6, name: "speed" },
  { id: 7, name: "weight" },
  { id: 8, name: "height" },
  { id: 9, name: "special-attack" },
  { id: 10, name: "special-defense" },
];

let generationsItems = [
  { id: 1, name: "I", value: [1, 151], loaded: true },
  { id: 2, name: "II", value: [152, 251], loaded: false },
  { id: 3, name: "III", value: [252, 386], loaded: false },
  { id: 4, name: "IV", value: [387, 494], loaded: false },
  { id: 5, name: "V", value: [495, 649], loaded: false },
  { id: 6, name: "VI", value: [650, 721], loaded: false },
  { id: 7, name: "VII", value: [722, 809], loaded: false },
  { id: 8, name: "VIII", value: [810, 900], loaded: false },
];

function Menu() {
  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState([]);

  const [generation, setGeneration] = useState([
    { id: 1, name: "I", value: [1, 151], loaded: true },
  ]);
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.rootReducer.pokemons.data);
  const loaded = useSelector((state) => state.rootReducer.loaded);
  const types = useSelector((state) => state.rootReducer.types.data);

  useEffect(() => {
    var array = [];
    filter.map((e) => (array = [...array, e.name.toLowerCase()])); // aca reemplazo el arreglo
    if (loaded) {
      pokemons && dispatch(filterByType(array));
    }
    return () => {};
  }, [filter]);

  useEffect(() => {
    if (loaded) {
      sort[0] && dispatch(sortBy(sort[0].name));
    }
    return () => {};
  }, [sort]);

  useEffect(() => {

    if (loaded) {
      generation.map((g) =>
        g.loaded === false
          ? pokemons && dispatch(getGen(g.value)) && (g.loaded = true)
          : dispatch(filterByGen(generation))
      );
    }

    // por cada posicion en el arreglo tengo que checkear que todos los ids estan entre la generacion que vino
    return () => {};
  }, [generation]);

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
        <div className="generation">
          <Dropdown
            title="Generation"
            items={generationsItems}
            multiselect
            selection={generation}
            setSelection={setGeneration}
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
        <div className="toggle">
          {/* <HiOutlineAdjustments /> */}
          <Toggle op1="API" op2="DB" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
