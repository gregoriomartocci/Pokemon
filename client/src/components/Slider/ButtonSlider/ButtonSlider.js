import React from "react";
import "./ButtonSlider.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ButtonSlider = ({ direction, moveSlide }) => {


  return (
    <button
      onClick={moveSlide}
      className={
        direction === "slider-next"
          ? "btn-slide slider-next"
          : "btn-slide slider-prev"
      }
    >
      {direction === "slider-next" ? (
        <MdKeyboardArrowRight />
      ) : (
        <MdKeyboardArrowLeft />
      )}
    </button>
  );
};

export default ButtonSlider;
