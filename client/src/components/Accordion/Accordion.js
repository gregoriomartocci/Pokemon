import React from "react";
import "./Accordion.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Multiselect from "../Multiselect/Multiselect";

function Accordion({
  title,
  elements,
  selection,
  setSelection,
  open,
  setOpen,
  value,
}) {
  
  const onClickHandler = () => {
    const aux = open;
    for (const key in aux) {
      if (key === value) {
        aux[key] = !aux[key];
      } else {
        aux[key] = false;
      }
    }
    setOpen({ ...aux });
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => onClickHandler()}>
          <div>
            <h3>{title}</h3>
          </div>
          <span>{open[value] ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        <div
          className={
            open[value]
              ? `accordion-content accordion-show`
              : `accordion-content`
          }
        >
          {
            <Multiselect
              items={elements}
              multiselect={
                (title === "FILTER" || title === "GENERATION") && true
              }
              selection={selection}
              setSelection={setSelection}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default Accordion;
