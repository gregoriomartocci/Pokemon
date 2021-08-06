/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Modal.css";
import { IoCloseSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Dropdown from "../Dropdown/Dropdown";

import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon } from "../../redux/actions";

function Modal({ showModal, setShowModal }) {
  const modalRef = useRef();
  const [typesSelected, setTypesSelected] = useState([]);
  const [formValidation, setFormValidation] = useState(null);
  const dispatch = useDispatch();
  const types = useSelector((state) => state.rootReducer.types.data);

  const [input, setInput] = useState({
    name: { value: "", validated: "" },
    attack: { value: "", validated: "" },
    defense: { value: "", validated: "" },
    health: { value: "", validated: "" },
    speed: { value: "", validated: "" },
    strenght: { value: "", validated: "" },
    height: { value: "", validated: "" },
    weight: { value: "", validated: "" },
    special_attack: { value: "", validated: "" },
    special_defense: { value: "", validated: "" },
    types: [],
  });

  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{6,15}$/, // Letras y espacios, pueden llevar acentos.
    attack: /^.{1,5}$/, // 4 a 12 digitos.
    defense: /^.{1,5}$/, // 4 a 12 digitos.
    health: /^.{1,5}$/, // 4 a 12 digitos.
    speed: /^.{1,5}$/, // 4 a 12 digitos.
    strenght: /^.{1,5}$/, // 4 a 12 digitos.
    height: /^.{1,5}$/, // 4 a 12 digitos.
    weight: /^.{1,5}$/, // 4 a 12 digitos.
    special_attack: /^.{1,5}$/, // 4 a 12 digitos.
    special_defense: /^.{1,5}$/, // 4 a 12 digitos.
    // types: /^[a-zA-ZÀ-ÿ\s]{6,15}$/, // Letras y espacios, pueden llevar acentos.
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    var array = [];

    array = typesSelected.map((g) => g);

    setInput({
      ...input,
      types: array,
    });
  }, [typesSelected]);

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

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
    if (
      input.name.validated === "true" &&
      input.attack.validated === "true" &&
      input.defense.validated === "true" &&
      input.health.validated === "true" &&
      input.speed.validated === "true" &&
      input.strenght.validated === "true" &&
      input.height.validated === "true" &&
      input.weight.validated === "true" &&
      input.special_attack.validated === "true" &&
      input.special_defense.validated === "true"
    ) {
      setFormValidation(true);
      dispatch(createPokemon(input));
    } else {
      setFormValidation(false);
    }
  };

  return (
    <>
      {showModal ? (
        <div className="modal" onClick={closeModal}>
          <div className="modal-wrapper" ref={modalRef}>
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
                <div className="row">
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
                    name="attack"
                    title="Attack"
                    type="number"
                    input={input}
                    onChangeHandler={onChangeHandler}
                    validate={validate}
                    error="Must be between 6 to 15 characters"
                  ></Input>
                </div>
                <div className="row">
                  <Input
                    name="defense"
                    title="Defense"
                    type="number"
                    input={input}
                    onChangeHandler={onChangeHandler}
                    validate={validate}
                    error="Must be between 1 to 5 digits"
                  ></Input>
                  <Input
                    name="health"
                    title="Health"
                    type="number"
                    input={input}
                    onChangeHandler={onChangeHandler}
                    validate={validate}
                    error="Must be between 1 to 5 digits"
                  ></Input>
                </div>
                <div className="row">
                  <Input
                    name="speed"
                    title="Speed"
                    type="number"
                    input={input}
                    onChangeHandler={onChangeHandler}
                    validate={validate}
                    error="Must be between 1 to 5 digits"
                  ></Input>
                  <Input
                    name="strenght"
                    title="Strenght"
                    type="number"
                    input={input}
                    onChangeHandler={onChangeHandler}
                    validate={validate}
                    error="Must be between 1 to 5 digits"
                  ></Input>
                </div>
                <div className="row">
                  <Input
                    name="height"
                    title="Height"
                    type="number"
                    input={input}
                    onChangeHandler={onChangeHandler}
                    validate={validate}
                    error="Must be between 1 to 5 digits"
                  ></Input>
                  <Input
                    name="weight"
                    title="Weight"
                    type="number"
                    input={input}
                    onChangeHandler={onChangeHandler}
                    validate={validate}
                    error="Must be between 1 to 5 digits"
                  ></Input>
                </div>
                <div className="row">
                  <Input
                    name="special_attack"
                    title="Sp. Attack"
                    type="number"
                    input={input}
                    onChangeHandler={onChangeHandler}
                    validate={validate}
                    error="Must be between 1 to 5 digits"
                  ></Input>
                  <Input
                    name="special_defense"
                    title="Sp. Defense"
                    type="number"
                    input={input}
                    onChangeHandler={onChangeHandler}
                    validate={validate}
                    error="Must be between 1 to 5 digits"
                  ></Input>
                </div>
                <div className="row">
                  <div className="input-element">
                    <Dropdown
                      title="Type"
                      items={types && types}
                      multiselect
                      selection={typesSelected}
                      setSelection={setTypesSelected}
                    ></Dropdown>
                  </div>
                </div>
                {formValidation === true && (
                  <div className="success-toast">
                    <div className="toast-col">
                      <i className="icon-checked">
                        <FaCheck />
                      </i>
                    </div>
                    <div className="toast-col">
                      <p className="toast-text">Pokemon succesfully created</p>
                    </div>
                  </div>
                )}
                {formValidation === false && (
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
                )}
              </form>
              <div className="bottom-row">
                <div
                  className="cancel-btn"
                  onClick={() => setShowModal((prev) => !prev)}
                >
                  Cancel
                </div>
                <div className="submit-btn" onClick={(e) => onClickHandler(e)}>
                  Create
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
