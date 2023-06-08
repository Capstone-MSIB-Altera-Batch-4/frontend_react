import React, { useMemo } from "react";
import TableAction from "./TableAction";
import { Link } from "react-router-dom";
import { DummyDetails } from "../../data/DummyData";
import { useState } from "react";
import { useEffect } from "react";

const TabelDetails = ({ data }) => {



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










  return (
    <div>
      <TableAction
        headerColor={{ backgroundColor: "#FDDFDF" }}
        columns={columns}
        data={data}
        pageSize={10}
        buttonComponent={(data) => (
          <button
            className="btn detail btn-outline-danger py-1"
          ><Link
            to={`/orders/detailorder/${data.order_id}`}
            className="text-decoration-none text-danger">
              Detail
            </Link>
          </button>)}
      />
    </div>
  );
};

export default TabelDetails;
