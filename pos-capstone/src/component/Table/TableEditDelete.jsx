import React from "react";
import { ArrowLeft, ArrowRight, Pencil, Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const TableEditDelete = ({ columns, data, pageSize, headerColor }) => {
  const [pageIndex, setPageIndex] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(pageSize);
  const pageCount = Math.ceil(data.length / rowsPerPage);
  const startIndex = pageIndex * rowsPerPage;
  const endIndex = (pageIndex + 1) * rowsPerPage;
  const currentPage = data.slice(startIndex, endIndex);
  const theadStyle = {
    backgroundColor: headerColor,
  };

  const handleRowsPerPageChange = (event) => {
    const newRowsPerPage = parseInt(event.target.value);
    setRowsPerPage(newRowsPerPage);
    setPageIndex(0);
  };

  const [hoveredRow, setHoveredRow] = React.useState(null);

  const handleRowHover = (index) => {
    setHoveredRow(index);
  };

  const handleRowLeave = () => {
    setHoveredRow(null);
  };

  return (
    <div className="table-edit-delete overflow-hidden">
      <table className="table table-bordered text-center">
        <thead className="thead-dark" style={theadStyle}>
          <tr>
            {columns.map((column, columnIndex) => (
              <th key={columnIndex}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentPage.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onMouseEnter={() => handleRowHover(rowIndex)}
              onMouseLeave={handleRowLeave}
              style={{
                backgroundColor:
                  hoveredRow === rowIndex ? "#E7E7E7" : "inherit",
              }}
            >
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>
                  {rowIndex === hoveredRow &&
                  columnIndex === columns.length - 1 ? (
                    <>
                      <Link
                        to={`editproduct/${row.id}`}
                        style={{ marginRight: "15%", color: "#8B8B8B" }}
                      >
                        <Pencil />
                      </Link>
                      <Link to={`/delete/${row.id}`} style={{ color: "red" }}>
                        <Trash />
                      </Link>
                    </>
                  ) : (
                    row[column.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row px-0 pagination">
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
              style={{ borderColor: "red", borderRadius: "5px", color: "red"}}
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
              style={{ border: "none" }}
            >
              <ArrowLeft />
            </button>
            <span className="mx-2" style={{ fontWeight: "bold" }}>
              {pageIndex + 1}
            </span>
            <button
              onClick={() => setPageIndex((prevIndex) => prevIndex + 1)}
              disabled={pageIndex === pageCount - 1}
              style={{ border: "none" }}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableEditDelete;
