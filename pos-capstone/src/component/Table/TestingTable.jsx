import React from "react";
import TableEdit from "./TableEditDelete";
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
      
    ],
    []
  );

  const data = TableEditDelete();

  return (
    <div>
      <TableEdit
        headerColor={{backgroundColor:"#FDDFDF"}}
        columns={columns}
        data={data}
        pageSize={10}
      />
    </div>
  );
};

export default TestingTable;

