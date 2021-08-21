import React from "react";
import "./Pagination.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function Pagination({ pagination, setPage, page }) {
  var pageCount, previous, actual, next;

  if (pagination) {
    pageCount = pagination.pageCount;
    previous = pagination.previous;
    actual = pagination.actual;
    next = pagination.next;
  }

  const handleClick = (page) => {
    setPage(page);
  };

  return (
    <div className="pagination">
      {pagination ? (
        <>
          {previous && (
            <button className="prev" onClick={() => handleClick(previous)}>
              <MdKeyboardArrowLeft />
            </button>
          )}

          <ul className="pagination-list">
            <li
              className="pagination-item"
              onClick={() => pagination.previous && handleClick(previous)}
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
              {page + 1 !== pageCount && next}
            </li>
            {pagination.pageCount && <span>...</span>}
            <li
              className="pagination-item"
              onClick={() => handleClick(pageCount)}
            >
              {pageCount}
            </li>
          </ul>
          {pagination.next && page !== pagination.pageCount && (
            <button className="next" onClick={() => handleClick(next)}>
              <MdKeyboardArrowRight />
            </button>
          )}
        </>
      ) : null}
    </div>
  );
}

export default Pagination;
