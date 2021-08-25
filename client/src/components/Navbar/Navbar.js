import React, { useState } from "react";
import "./Navbar.css";
import dotenv from "dotenv";
// import { useDispatch } from "react-redux";
// import { clearFilters } from "../../redux/actions";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

dotenv.config();

function Navbar() {
  // const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  // const onClickHandler = () => {
  //   dispatch(clearFilters());
  // };

  return (
    <div className="Navbar">
      <Link to="/home">
        <div className="logo">
          <img src="/img/logo.svg" alt="" />
        </div>
      </Link>
      <div onClick={openModal} className="create">
        Create
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Navbar;
