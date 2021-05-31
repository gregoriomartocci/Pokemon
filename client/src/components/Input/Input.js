import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import React from "react";

function Input({ name, title, type, onChangeHandler, validate, input, error }) {
  return (
    <div className="input-element">
      <span className="label">{title}</span>
      <input
        type={type}
        name={name}
        value={input[name].value}
        className={`${
          input[name].validated === "true"
            ? "success-message"
            : input[name].validated === "false"
            ? "error-message"
            : `input`
        } `}
        onChange={(e) => {
          onChangeHandler(e);
        }}
        onKeyUp={validate}
        onBlur={validate}
        validated={input[name].validated}
      ></input>
      {input[name].validated === "true" ? (
        <i className="validate-icon success">
          <AiFillCheckCircle />
        </i>
      ) : input[name].validated === "false" ? (
        <i className="validate-icon error ">
          <AiOutlineCloseCircle />
        </i>
      ) : null}
      {input[name].validated === "false" ? (
        <div>
          <p className="error-notification">{error}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Input;
