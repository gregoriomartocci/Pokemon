import React, { useState } from "react";
import "./Slider.css";
import ButtonSlider from "./ButtonSlider/ButtonSlider";

export default function Slider({ data }) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {data.map((p, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={p.img} alt=""></img>
          </div>
        );
      })}

      <ButtonSlider moveSlide={nextSlide} direction={"slider-next"} />
      <ButtonSlider moveSlide={prevSlide} direction={"slider-prev"} />

      <div className="container-dots">
        {data.map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1 ? "slider-dot active" : "slider-dot"
            }
          ></div>
        ))}
      </div>
    </div>
  );
}
