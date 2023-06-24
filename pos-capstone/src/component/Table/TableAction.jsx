import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import './Table.css'


const TableAction = ({
  numbering,
  columns,
  data,
  headerColor,
  buttonComponent,
}) => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleRowHover = (index) => {
    setHoveredRow(index);
  };

  const handleRowLeave = () => {
    setHoveredRow(null);
  };

  return (
    <div className="table-edit-delete">
      <div className="scroll-table">
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
            {data?.map((row, rowIndex) => (
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
                     {column.accessor === "no" ? numbering + rowIndex : row[column.accessor]}
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
        {data?.length === 0 ? (
          <p className="text-center py-2 mx-auto" style={{background: "#E7E7E7"}}>Data not found</p>
        ) : null}
      </div>

      {/* <div className="row px-0 mt-5 justify-content-between">
        <div className="col-md-6 w-25">
          <div className="d-flex justify-content-start">
            <label htmlFor="rowsPerPageSelect">Show</label>
            <span className="number-wrapper">
              <input
                className="mx-3 input-pagination"
                type="number"
                id="rowsPerPageSelect"
                min="1"
                max="100"
                value={rowsPerPage}
                style={{
                  borderColor: "red",
                  borderRadius: "5px",
                  color: "red",
                  outline: "none",
                }}
                onChange={handleRowsPerPageChange}
              />
            </span>
            <label>Data</label>
          </div>
        </div>
        <div className="col-md-6 w-25">
          <div className="d-flex justify-content-end">
            <button
              onClick={() => setPageIndex((prevIndex) => prevIndex - 1)}
              disabled={pageIndex === 0}
              style={{ border: "none", background: "none" }}
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
      </div> */}
    </div>
  );
};

export default TableAction;