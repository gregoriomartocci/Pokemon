import React, { useState } from "react";
import "./Modal.css";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

function Modal({ showModal, setShowModal }) {
  const [input, setInput] = useState({
    name: { value: "", validated: "" },
    types: { value: "", validated: "" },
    attack: { value: Number(), validated: "" },
    speed: { value: Number(), validated: "" },
  });

  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{6,30}$/, // Letras y espacios, pueden llevar acentos.
    types: /^[a-zA-ZÀ-ÿ\s]{6,30}$/, // Letras y espacios, pueden llevar acentos.
    attack: /^.{1,12}$/, // 4 a 12 digitos.
    speed: /^.{1,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    number: /^\d{1,14}$/, // 1 a 14 numeros.
    user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  };

  const onchangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: { ...input[e.target.name], value: e.target.value },
    });
  };

  const validate = (e) => {
    if (expressions[e.target.name].test(input[e.target.name].value)) {
      console.log("input correcto");
      setInput({
        ...input,
        [e.target.name]: { ...input[e.target.name], validated: "true" },
      });
    } else {
      console.log("input incorrecto");
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
                <row className="row">
                  <div className="input-element">
                    <span className="label">Name</span>
                    <input
                      type="text"
                      name="name"
                      className="input"
                      value={input.name.value}
                      onChange={(e) => {
                        onchangeHandler(e);
                      }}
                      onKeyUp={validate}
                      onBlur={validate}
                      validated={input.name.validated}
                    ></input>
                    <i className="validate-icon">
                      <AiFillCheckCircle />
                    </i>
                  </div>
                  <div className="input-element">
                    <span className="label">Types</span>
                    <input
                      type="text"
                      name="types"
                      className="input"
                      value={input.types.value}
                      onChange={(e) => {
                        onchangeHandler(e);
                      }}
                      onKeyUp={validate}
                      onBlur={validate}
                      validated={input.types.validated}
                    ></input>
                    <i className="validate-icon">
                      <AiFillCheckCircle />
                    </i>
                  </div>
                </row>
                <row className="row">
                  <div className="input-element">
                    <span className="label">Attack</span>
                    <input
                      type="number"
                      name="attack"
                      value={input.attack.value}
                      className="input"
                      onChange={(e) => {
                        onchangeHandler(e);
                      }}
                      onKeyUp={validate}
                      onBlur={validate}
                      validated={input.attack.validated}
                    ></input>
                    <i className="validate-icon">
                      <AiFillCheckCircle />
                    </i>
                  </div>
                  <div className="input-element">
                    <span className="label">Speed</span>
                    <input
                      type="number"
                      name="speed"
                      value={input.speed.value}
                      className={`${
                        input.speed.validated === "true"
                          ? "success-message"
                          : input.speed.validated === "false"
                          ? "error-message"
                          : `input`
                      } `}
                      onChange={(e) => {
                        onchangeHandler(e);
                      }}
                      onKeyUp={validate}
                      onBlur={validate}
                      validated={input.speed.validated}
                    ></input>
                    {input.speed.validated === "true" ? (
                      <i className="validate-icon success">
                        <AiFillCheckCircle />
                      </i>
                    ) : input.speed.validated === "false" ? (
                      <i className="validate-icon error ">
                        <AiOutlineCloseCircle />
                      </i>
                    ) : null}
                    {input.speed.validated === "false" ? (
                      <div>
                        <p className="error-notification">No conviene tomar tanta falopa</p>
                      </div>
                    ) : null}
                  </div>
                </row>

                <div className="success-notification">
                  <p>Pokemon created succesfully!</p>
                </div>

                {false && (
                  <div className="error-message">
                    <p>
                      <i className="exclamation-icon">
                        <BsFillExclamationTriangleFill />
                      </i>
                      <b>Error:</b>Please complete the form correctly
                    </p>
                  </div>
                )}
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
