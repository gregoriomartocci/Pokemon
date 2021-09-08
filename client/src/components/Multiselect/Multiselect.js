import React from "react";
import ".//Multiselect.css";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

function Multiselect({ items, multiselect, selection, setSelection }) {
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
    <div className="multiselect-wrapper">
      <div tabIndex={0} className="multiselect-header">
        <div className="multiselect-header"></div>
      </div>

      <ul className={`multiselect-list`}>
        {items && items?.map((item) => (
          <li className={`multiselect-list-item`} key={item.id}>
            <button
              type="button"
              className="multiselect-list-button"
              onClick={() => handleOnClick(item)}
            >
              <span className="multiselect-item-icon">
                {isItemSelected(item) ? (
                  <ImCheckboxChecked className="checked" />
                ) : (
                  <ImCheckboxUnchecked className="unchecked" />
                )}
              </span>
              <span className="multiselect-item-name">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Multiselect;
