import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Menu.css";

import { BiSortUp } from "react-icons/bi";
import { HiOutlineAdjustments } from "react-icons/hi";
import { HiOutlineViewGrid } from "react-icons/hi";
import Dropdown from "../Dropdown/Dropdown";
import { useDispatch } from "react-redux";

const types = [
  { id: 1, name: "water" },
  { id: 2, name: "leaf" },
  { id: 3, name: "poison" },
  { id: 4, name: "fire" },
  { id: 5, name: "ghost" },
  { id: 6, name: "dark" },
];

function Menu() {
  const [selection, setSelection] = useState([]);
  const [filtering, setFiltering] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(selection);

    var array = [];
    selection.map((e) => (array = [...array, `&filter=${e.name}`])); // aca reemplazo el arreglo
    setFiltering(array.join(""));

    console.log("esto es selection", selection);

    return () => console.log("cleanup");
    // cada vez que se actualice selection
    // por cada item que hay en selection yo quiero mandar &filter=tipo

    // selection.forEach((e) => array.push(`&filter=${e.name}`));   // le agrego
  }, [selection, filtering]);

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
            selection={selection}
            setSelection={setSelection}
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
