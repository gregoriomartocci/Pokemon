import React, { useState } from "react";
import "./Navbar.css";
import dotenv from "dotenv";
import { useDispatch } from "react-redux";
import { pokemonSearch } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import Modal from "../Modal/Modal";

dotenv.config();

function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState(""); //useState es una funcion que tiene el estado del input y el setInput es una funcion que sabe como modificar a la variable (Variable ---> input)

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const onChangeHandler = (e) => {
    setInput(e);
  };

  const onClickHandler = () => {
    //
    dispatch(pokemonSearch(input));
    history.push("/pokemon-results");
  };

  return (
    <div className="Navbar">
      <div className="logo">
        <img src="/img/logo.svg" alt="" />
      </div>
      <div onClick={openModal} className="create">
        Create
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Navbar;
