import React, { useEffect, useRef, useState } from "react";
import "./Dropdown.css";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {} from "react-icons/im";

const useOutsideAlerter = (ref, header, header_title, setOpen) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        ref.current &&
        header.current !== e.target &&
        header_title.current !== e.target &&
        !ref.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

function Dropdown({ title, items, multiselect, selection, setSelection }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const header = useRef(null);
  const header_title = useRef(null);
  useOutsideAlerter(ref, header, header_title, setOpen);

  const handleOnClick = (item) => {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiselect) {
        setSelection([item]);
      } else if (multiselect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  };

  const isItemSelected = (item) => {
    if (selection.find((current) => current.id === item.id)) {
      return true;
    }
    return false;
  };

  return (
    <div className="dropdown-wrapper">
      <div
        tabIndex={0}
        className="dropdown-header"
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
      >
        <div className="dropdown-header" ref={header}>
          <span className="dropdown-header-title" ref={header_title}>
            {title}
          </span>
          <div className="dropdown-header-icon">
            {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </div>
        </div>
      </div>
      {open && (
        <ul className={`dropdown-list ${title.toLowerCase()}`} ref={ref}>
          {items.map((item) => (
            <li
              className={`dropdown-list-item`}
              key={item.id}
            >
              <button
                type="button"
                className="dropdown-list-button"
                onClick={() => handleOnClick(item)}
              >
                <span className="dropdown-item-icon">
                  {isItemSelected(item) ? (
                    <ImCheckboxChecked className="checked" />
                  ) : (
                    <ImCheckboxUnchecked className="unchecked" />
                  )}
                </span>
                <span className="dropdown-item-name">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
