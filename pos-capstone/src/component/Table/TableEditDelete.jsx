import React, { useMemo } from "react";
import TableAction from "./TableAction";
import { DummyEditDelete } from "../../data/DummyData";
import { Link } from "react-router-dom";
import { Pencil, Trash } from "react-bootstrap-icons";

const TableEdit = () => {
  const columns = useMemo(
    () => [
      { Header: "No", accessor: "no" },
      { Header: "Id", accessor: "id" },
      { Header: "Image", accessor: "image" },
      { Header: "Name", accessor: "name" },
      { Header: "Category", accessor: "category" },
      { Header: "Stock", accessor: "stock" },
      { Header: "Unit", accessor: "unit" },
      { Header: "Price", accessor: "price" },
    ],
    []
  );

  const data = DummyEditDelete();
  
  return (
    <div>
      <TableAction
        headerColor={{ backgroundColor: "#FDDFDF" }}
        columns={columns}
        data={data}
        pageSize={10}
        buttonComponent={() => (
          <div>
            <Link style={{ marginRight: "15%", color: "#8B8B8B" }}>
              <Pencil />
            </Link>
            <Link style={{ color: "red" }}>
              <Trash />
            </Link>
          </div>
        )}
      />
    </div>
  );
};

export default TableEdit;