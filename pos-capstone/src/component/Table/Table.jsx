import React from "react";
import "./Table.css";

const Table = ({ data, headerColor, headerFontColor }) => {
  const columns = Object.keys(data[0]);

  const theadStyle = {
    backgroundColor: headerColor,
    color: headerFontColor,
  };

  return (
    <div className="scroll-table">
      <table className="table text-center">
        <thead style={theadStyle}>
          <tr>
            {columns.map((column, index) => (
              <th
                style={{ backgroundColor: "#FDDFDF" }}
                className="fw-medium header-style py-3"
                key={index}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  style={
                    columnIndex === 5 && index < 4
                      ? {
                          backgroundColor: "#DCFCE7",
                          color: "#0D8B38",
                          fontWeight: 500,
                        }
                      : columnIndex === 5 && index === 4
                      ? {
                          backgroundColor: "#FDDFDF",
                          color: "#A70C0C",
                          fontWeight: 500,
                        }
                      : null
                  }
                >
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
