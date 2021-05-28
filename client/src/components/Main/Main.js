import React from "react";
import "./Main.css";
import Cards from "../Cards/Cards";
import Menu from "../Menu/Menu";

function Main() {
  return (
    <div className="main">
      <Menu />
      <Cards />
    </div>
  );
}

export default Main;
