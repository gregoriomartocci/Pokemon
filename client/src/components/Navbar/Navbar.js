import React, { useState } from "react";
import "./Navbar.css";
import dotenv from "dotenv";
// import { useDispatch } from "react-redux";
// import { clearFilters } from "../../redux/actions";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import MobileMenu from "../MobileMenu/MobileMenu";
import Icons from "../Icons/Icons";

dotenv.config();

function Navbar() {
  // const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  // const onClickHandler = () => {
  //   dispatch(clearFilters());
  // };

  return (
    <div className="navbar">
      <Link to="/home">
        <div className="logo">
          <img style={{ width: "100px" }} src="/img/logo.svg" alt="" />
        </div>
      </Link>
      <div onClick={openModal} className="create">
        Create
      </div>
      <div
        className="navbar-mobile-btn"
        onClick={() => setActive((prev) => !prev)}
      >
        <i className={`navbar-mobile-icon`}>
          {!active ? <HiMenuAlt3 /> : <IoCloseSharp />}
        </i>
      </div>
      <MobileMenu setActive={setActive} active={active} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Navbar;
