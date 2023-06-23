import React, { useMemo } from "react";
import TableAction from "./TableAction";
import { Link, useNavigate } from "react-router-dom";
import SecondaryButton from "../../element/Button/SecondaryButton/SecondaryButton";

const TabelDetails = ({ data }) => {



  const columns = useMemo(
    () => [
      { Header: "No", accessor: "no" },
      { Header: "Type", accessor: "order_option" },
      { Header: "Order ID", accessor: "order_id" },
      { Header: "Date", accessor: "created_at" },
      { Header: "Status", accessor: "status" },
      { Header: "Payment", accessor: "payment" },
      { Header: "Order Total", accessor: "grand_total" },
    ],
    []
  );
  const navigate = useNavigate()
  
  return (
    <div>
      <TableAction
        headerColor={{ backgroundColor: "#FDDFDF" }}
        columns={columns}
        data={data}
        pageSize={10}
        buttonComponent={(data) => (
          <SecondaryButton
            className="btn-secondary backtoorder text-danger px-3"
            onClick={() => navigate(`/orders/detailorder/${data.id}`)}
            label={'Detail'}
          />
          )}
      />
    </div>
  );
};

export default TabelDetails;