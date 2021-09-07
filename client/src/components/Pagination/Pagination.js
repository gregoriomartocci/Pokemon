import React from "react";
import "./Pagination.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function Pagination({ pagination, setPage, page }) {
  let pageCount, previous, actual, next;

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
            {previous && (
              <li
                className="pagination-item"
                onClick={() => handleClick(previous)}
              >
                {previous}
              </li>
            )}

            <li
              className="pagination-item active"
              onClick={() => handleClick(actual)}
            >
              {actual}
            </li>

            {page + 1 !== pageCount && (
              <li className="pagination-item" onClick={() => handleClick(next)}>
                {next}
              </li>
            )}

            {actual + 1 !== pageCount && pageCount && <span>...</span>}

            {actual !== pageCount && (
              <li
                className="pagination-item"
                onClick={() => handleClick(pageCount)}
              >
                {pageCount}
              </li>
            )}
          </ul>
          {next && page !== pageCount ? (
            <button className="next" onClick={() => handleClick(next)}>
              <MdKeyboardArrowRight />
            </button>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default Pagination;
