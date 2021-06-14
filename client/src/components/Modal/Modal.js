import React, { useState } from "react";
import "./Modal.css";
import { IoCloseSharp } from "react-icons/io5";

import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import Input from "../Input/Input";

function Modal({ showModal, setShowModal }) {
  const [input, setInput] = useState({
    name: { value: "", validated: "" },
    types: { value: "", validated: "" },
    attack: { value: Number(), validated: "" },
    speed: { value: Number(), validated: "" },
  });

  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{6,15}$/, // Letras y espacios, pueden llevar acentos.
    types: /^[a-zA-ZÀ-ÿ\s]{6,15}$/, // Letras y espacios, pueden llevar acentos.
    attack: /^.{1,5}$/, // 4 a 12 digitos.
    speed: /^.{1,5}$/, // 4 a 12 digitos.
    // email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    // number: /^\d{1,14}$/, // 1 a 14 numeros.
    // user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  };

  const onChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: { ...input[e.target.name], value: e.target.value },
    });
  };

  const validate = (e) => {
    if (expressions[e.target.name].test(input[e.target.name].value)) {
      setInput({
        ...input,
        [e.target.name]: { ...input[e.target.name], validated: "true" },
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: { ...input[e.target.name], validated: "false" },
      });
    }
  };

  const onClickHandler = () => {
    console.log(input);
  };

  return (
    <>
      {showModal ? (
        <div className="modal">
          <div className="modal-wrapper">
            <div className="modal-content">
              <div className="top-row">
                <div className="title">
                  <h3>Create Pokemon</h3>
                </div>
                <div>
                  <i
                    onClick={() => setShowModal((prev) => !prev)}
                    className="close-icon"
                  >
                    <IoCloseSharp />
                  </i>
                </div>
              </div>

              <button className="modal-button"></button>

              <form className="modal-form">
                <row className="row row-top">
                  <Input
                    name="name"
                    title="Name"
                    type="text"
                    input={input}
                    onChangeHandler={onChangeHandler}
                    validate={validate}
                    error="Must be between 6 to 15 characters"
                  ></Input>
                  <Input
                    name="types"
                    type="text"
                    title="Types"
                    input={input}
                    onChangeHandler={onChangeHandler}
                    validate={validate}
                    error="Must be between 6 to 15 characters"
                  ></Input>
                </row>
                <row className="row">
                  <Input
                    name="attack"
                    type="number"
                    title="Attack"
                    input={input}
                    onChangeHandler={onChangeHandler}
                    validate={validate}
                    error="Must be between 1 to 5 digits"
                  ></Input>
                  <Input
                    name="speed"
                    type="number"
                    title="Speed"
                    input={input}
                    onChangeHandler={onChangeHandler}
                    validate={validate}
                    error="Must be between 1 to 5 digits"
                  ></Input>
                </row>

                <div className="success-toast">
                  <div className="toast-col">
                    <i className="icon-checked">
                      <FaCheck />
                    </i>
                  </div>
                  <div className="toast-col">
                    <p className="toast-text">Pokemon succesfully created</p>
                    <span className="toast-span">thank you</span>
                  </div>
                </div>

                <div className="error-toast">
                  <div className="toast-col">
                    <i className="icon-error">
                      <ImCross />
                    </i>
                  </div>
                  <div className="toast-col">
                    <p className="toast-text">Complete the form correctly</p>
                  </div>
                </div>
              </form>
              <row className="bottom-row">
                <div
                  className="cancel-btn"
                  onClick={() => setShowModal((prev) => !prev)}
                >
                  Cancel
                </div>
                <div className="submit-btn" onClick={(e) => onClickHandler(e)}>
                  Create
                </div>
              </row>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
