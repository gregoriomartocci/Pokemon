import React, { useState } from "react";
import "./Pagination.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { getPokemons } from "../../redux/actions/index.js";
import { useDispatch } from "react-redux";

function Pagination({ pagination }) {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  var pageCount, previous, actual, next;

  if (pagination) {
    pageCount = pagination.pageCount;
    previous = pagination.previous;
    actual = pagination.actual;
    next = pagination.next;
  }

  const handleClick = (page) => {
    dispatch(getPokemons(page));
  };

  return (
    <div className="pagination">
      {pagination ? (
        <>
          {previous && (
            <button className="prev">
              <MdKeyboardArrowLeft />
            </button>
          )}

          <ul className="pagination-list">
            <li
              className="pagination-item"
              onClick={() => handleClick(previous)}
            >
              {previous}
            </li>
            <li className="pagination-item active">{actual}</li>
            <li className="pagination-item" onClick={() => handleClick(next)}>
              {next}
            </li>
            ...
            <li
              className="pagination-item"
              onClick={() => handleClick(pageCount)}
            >
              {pageCount}
            </li>
          </ul>
          <button className="next">
            <MdKeyboardArrowRight />
          </button>
        </>
      ) : null}
    </div>
  );
}

export default Pagination;
