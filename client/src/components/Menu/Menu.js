/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Menu.css";
import Dropdown from "../Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilters,
  filterByGen,
  filterByType,
  getGen,
  sortBy,
} from "../../redux/actions";
import Toggle from "../Toggle/Toggle";
import Alert from "../Alert/Alert";

export const sortItems = [
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

export const generationsItems = [
  { id: 1, name: "I", value: [1, 151], loaded: true },
  { id: 2, name: "II", value: [152, 251], loaded: false },
  { id: 3, name: "III", value: [252, 386], loaded: false },
  { id: 4, name: "IV", value: [387, 494], loaded: false },
  { id: 5, name: "V", value: [495, 649], loaded: false },
  { id: 6, name: "VI", value: [650, 721], loaded: false },
  { id: 7, name: "VII", value: [722, 809], loaded: false },
  { id: 8, name: "VIII", value: [810, 899], loaded: false },
];

function Menu() {
  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState([]);
  const [lastRequest, setLastRequest] = useState([1, 151]);
  const [generation, setGeneration] = useState([
    { id: 1, name: "I", value: [1, 151], loaded: true },
  ]);
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.rootReducer.pokemons.data);
  const error = useSelector((state) => state.rootReducer.allPokemons.error);
  const loaded = useSelector((state) => state.rootReducer.loaded);
  const loading = useSelector((state) => state.rootReducer.loading);
  const types = useSelector((state) => state.rootReducer.types.data);

  useEffect(() => {
    var array = [];
    filter.map((e) => (array = [...array, e.name.toLowerCase()])); // aca reemplazo el arreglo
    if (loaded && !loading) {
      pokemons && dispatch(filterByType(array));
    }
    return () => {};
  }, [filter]);

  useEffect(() => {
    if (loaded && !loading) {
      sort[0] && dispatch(sortBy(sort[0].value));
    }
    return () => {};
  }, [sort]);

  useEffect(() => {
    if (loaded && !loading) {
      // si la app no esta cargando y ya se cargo todo
      generation.map((g) =>
        g.loaded === false
          ? pokemons &&
            dispatch(getGen(g.value)) &&
            (g.loaded = true) &&
            setLastRequest(g.value)
          : dispatch(filterByGen(generation))
      );
    }

    // por cada posicion en el arreglo tengo que checkear que todos los ids estan entre la generacion que vino
  }, [generation]);

  const onClickHandler = () => {
    dispatch(clearFilters());
    setSort([]);
    setFilter([]);
  };

  return (
    <>
      {error && <Alert req={lastRequest} />}
      <div className="menu">
        <SearchBar />
        <div className="menu-right">
          <div className="filter-container">
            {/* <HiOutlineAdjustments /> */}
            <Dropdown
              title="Type"
              items={types && types}
              multiselect
              selection={filter}
              setSelection={setFilter}
            ></Dropdown>
          </div>
          <div className="generation-container">
            <Dropdown
              title="Generation"
              items={generationsItems}
              multiselect
              selection={generation}
              setSelection={setGeneration}
              type="generation"
            ></Dropdown>
          </div>
          <div className="sort-container">
            <Dropdown
              title="Sort"
              items={sortItems}
              selection={sort}
              setSelection={setSort}
            ></Dropdown>
          </div>
          <div className="clear-filters">
            <p className="clear-filters-span" onClick={() => onClickHandler()}>
              Reset Filters
            </p>
          </div>
          <div className="toggle">
            <Toggle op1="API" op2="DB" mobile={false} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
