import React, { useMemo } from "react";
import TableAction from "./TableAction";
import { DummyDetails } from "../../data/DummyData";

const TabelDetails = () => {
  const columns = useMemo(
    () => [
      { Header: "No", accessor: "no" },
      { Header: "Type", accessor: "type" },
      { Header: "Order ID", accessor: "order_id" },
      { Header: "Date", accessor: "date" },
      { Header: "Status", accessor: "status" },
      { Header: "Payment", accessor: "payment" },
      { Header: "Order Total", accessor: "order_total" },
    ],
    []
  );

  const data = DummyDetails();

  return (
    <div>
      <TableAction
        headerColor={{ backgroundColor: "#FDDFDF" }}
        columns={columns}
        data={data}
        pageSize={10}
        buttonComponent={() => <button className="btn detail btn-outline-danger">Details</button>}
      />
    </div>
  );
};

export default TabelDetails;
