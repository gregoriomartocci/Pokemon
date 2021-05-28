import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Menu.css";

import { BiSortUp } from "react-icons/bi";
import { HiOutlineAdjustments } from "react-icons/hi";
import { HiOutlineViewGrid } from "react-icons/hi";

function Menu() {
  return (
    <div className="menu">
      <SearchBar />
      <div className="filter-sort">
        <div className="view">
          <HiOutlineViewGrid />
        </div>
        <div className="sort">
          <BiSortUp />
        </div>
        <div className="filter">
          <HiOutlineAdjustments />
        </div>
      </div>
    </div>
  );
}

export default Menu;
