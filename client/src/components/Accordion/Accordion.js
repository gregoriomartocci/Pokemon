import React, { useState } from "react";
import "./Accordion.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Accordion({ title, elements }) {
  const [selected, setSelected] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => setSelected((prev) => !prev)}
        >
          <div>
            <h3>{title}</h3>
          </div>

          <span>{selected ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        <div
          className={
            selected ? `accordion-content accordion-show` : `accordion-content`
          }
        >
          {elements &&
            elements.map((e, i) => (
              <li className="accordion-content-item" key={i}>
                {e.name}
              </li>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
