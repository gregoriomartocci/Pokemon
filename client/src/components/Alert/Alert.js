import React from "react";
import { useDispatch } from "react-redux";
import { getGen } from "../../redux/actions";
import "./Alert.css";

function Alert({ req }) {
  const dispatch = useDispatch();

  const tryAgain = () => {
    dispatch(getGen(req));
  };

  return (
    <div className="alert-container">
      <div className="alert">
        <div className="alert-top">
          <img className="alert-img" src="/img/pokeball_error.svg" alt=""></img>
        </div>
        <div className="alert-bottom">
          <h2 className="alert-title">Oh no!</h2>
          <p className="alert-message">
            Something went wrong. Please try again
          </p>
          <div className="alert-btn" onClick={() => tryAgain()}>
            Try again
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
