import React, { useState } from "react";
import "./Navbar.css";
import dotenv from "dotenv";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import MobileMenu from "../MobileMenu/MobileMenu";
import Toggle from "../ToggleTheme/Toggle";

dotenv.config();

function Navbar({ theme, toggleTheme }) {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="navbar">
      <Link to="/home">
        <div className="logo">
          <img style={{ width: "100px" }} src="/img/logo.svg" alt="" />
        </div>
      </Link>
      <div className="navbar-right">
        <Toggle theme={theme} toggleTheme={toggleTheme} />
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
      </div>
      <MobileMenu setActive={setActive} active={active} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Navbar;
