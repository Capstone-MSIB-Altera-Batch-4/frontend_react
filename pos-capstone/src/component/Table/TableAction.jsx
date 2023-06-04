import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

const TableAction = ({
  columns,
  data,
  pageSize,
  headerColor,
  buttonComponent,
}) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageSize);
  const pageCount = Math.ceil(data.length / rowsPerPage);
  const startIndex = pageIndex * rowsPerPage;
  const endIndex = (pageIndex + 1) * rowsPerPage;
  const currentPage = data.slice(startIndex, endIndex);

  const handleRowsPerPageChange = (event) => {
    const newRowsPerPage = parseInt(event.target.value);
    setRowsPerPage(newRowsPerPage);
    setPageIndex(0);
  };

  const [hoveredRow, setHoveredRow] = useState(null);

  const handleRowHover = (index) => {
    setHoveredRow(index);
  };

  const handleRowLeave = () => {
    setHoveredRow(null);
  };

  return (
    <div className="table-edit-delete overflow-hidden">
      <table className="table table-borderless text-center">
        <thead>
          <tr>
            {columns.map((column, columnIndex) => (
              <th style={headerColor} key={columnIndex}>
                {column.Header}
              </th>
            ))}
            <th style={headerColor}></th>
          </tr>
        </thead>
        <tbody>
          {currentPage.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onMouseEnter={() => handleRowHover(rowIndex)}
              onMouseLeave={handleRowLeave}
              style={
                rowIndex === hoveredRow
                  ? { backgroundColor: "#E7E7E7" }
                  : { backgroundColor: "inherit" }
              }
            >
              {columns.map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  style={
                    rowIndex === hoveredRow
                      ? { backgroundColor: "#E7E7E7" }
                      : { backgroundColor: "inherit" }
                  }
                >
                  {row[column.accessor]}
                </td>
              ))}
              <td
                style={
                  rowIndex === hoveredRow
                    ? { backgroundColor: "#E7E7E7" }
                    : { backgroundColor: "inherit" }
                }
              >
                <div
                  style={
                    rowIndex === hoveredRow ? {} : { visibility: "hidden" }
                  }
                >
                  {buttonComponent(row)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row px-0">
        <div className="col-md-6">
          <div className="d-flex justify-content-start">
            <label htmlFor="rowsPerPageSelect">Show</label>
            <input
              className="mx-3"
              type="number"
              id="rowsPerPageSelect"
              min="1"
              max="100"
              value={rowsPerPage}
              style={{ borderColor: "red", borderRadius: "5px", color: "red" }}
              onChange={handleRowsPerPageChange}
            ></input>
            <label>Data</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-end">
            <button
              onClick={() => setPageIndex((prevIndex) => prevIndex - 1)}
              disabled={pageIndex === 0}
              style={{ border: "none", background: "none"}}
            >
              <ArrowLeft />
            </button>
            <span className="mx-2" style={{ fontWeight: "bold" }}>
              {pageIndex + 1}
            </span>
            <button
              onClick={() => setPageIndex((prevIndex) => prevIndex + 1)}
              disabled={pageIndex === pageCount - 1}
              style={{ border: "none", background: "none" }}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableAction;