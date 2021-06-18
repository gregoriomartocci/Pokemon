import React from "react";
import "./Pagination.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function Pagination({ pagination, setPage }) {
  var pageCount, previous, actual, next;

  if (pagination) {
    pageCount = pagination.pageCount;
    previous = pagination.previous;
    actual = pagination.actual;
    next = pagination.next;
  }

  const handleClick = (page) => {
    console.log(page);
    setPage(page);
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
            <li
              className="pagination-item active"
              onClick={() => handleClick(actual)}
            >
              {actual}
            </li>
            <li className="pagination-item" onClick={() => handleClick(next)}>
              {next}
            </li>
            ...
            <li className="pagination-item">{pageCount}</li>
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
