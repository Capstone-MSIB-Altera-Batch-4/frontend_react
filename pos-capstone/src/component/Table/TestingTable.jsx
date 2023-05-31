import React from "react";
import Table from "./TableEditDelete";
import TableEditDelete from "../../data/DummyData";

const TestingTable = () => {
  const columns = React.useMemo(
    () => [
      { Header: "No", accessor: "no" },
      { Header: "Id", accessor: "id" },
      { Header: "Image", accessor: "image" },
      { Header: "Name", accessor: "name" },
      { Header: "Category", accessor: "category" },
      { Header: "Stock", accessor: "stock" },
      { Header: "Unit", accessor: "unit" },
      { Header: "Price", accessor: "price" },
      { Header: "", accessor: "" }
    ],
    []
  );

  const data = TableEditDelete();

  return (
    <div>
      <Table
        headerColor="#FDDFDF"
        columns={columns}
        data={data}
        pageSize={10}
      />
    </div>
  );
};

export default TestingTable;

