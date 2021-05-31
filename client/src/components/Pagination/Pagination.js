import React from "react";
import "./Pagination.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function Pagination() {
  return (
    <div className="pagination">
      <button className="prev">
        <MdKeyboardArrowLeft />
      </button>
      <ul className="pagination-list">
        <li className="pagination-item">1</li>
        <li className="pagination-item">2</li>
        <li className="pagination-item">3</li>
        <li className="pagination-item">4</li>
        <li className="pagination-item">5</li>
        <li className="pagination-item">...</li>
        <li className="pagination-item">25</li>
      </ul>
      <button className="next">
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
