import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByAPI, filterByDB } from "../../redux/actions";
import "./Toggle.css";

function Toggle({ op1, op2, mobile }) {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    setToggle((prev) => !prev);

    if (!toggle) {
      dispatch(filterByDB());
    } else {
      dispatch(filterByAPI());
    }
  };

  return (
    <div className="toggle-container">
      <span
        className={mobile ? "toggle-span-mobile" : "toggle-span"}
        style={{ margin: "0 15px" }}
      >
        {op1}
      </span>
      <div className={`switch`} onClick={() => onClickHandler()}>
        <span className={`dot rounded ${toggle && `toggle-active`} `} />
      </div>
      <span
        className={mobile ? "toggle-span-mobile" : "toggle-span"}
        style={{ margin: "0 15px" }}
      >
        {op2}
      </span>
    </div>
  );
}

export default Toggle;
