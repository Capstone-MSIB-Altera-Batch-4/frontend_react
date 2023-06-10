import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../../data/DummyData";
import { PencilFill } from "react-bootstrap-icons";
import CashierForm from "../../component/CashierForm/CashierForm";

const EditCashier = () => {
  const { id } = useParams();

  const products = productsData[id];
  console.log(products);

  return (
    <div className="col overflow-hidden">
      <div className="my-5 justify-content-start">
        <div className="d-flex gap-5 m-5">
          <PencilFill className="mt-1"/>
          <h3
            style={{
              fontFamily: "rubik",
              fontWeight: "600",
              fontSize: "24px",
              color: "#141414",
            }}
          >
            Edit employee data
          </h3>
        </div>
      </div>
      <div
        className="text-center mb-5"
        style={{
          backgroundColor: "#FDDFDF",
          fontSize: "28px",
          fontWeight: 500,
          fontFamily: "rubik",
        }}
      >
        <h3>Employee Information</h3>
      </div>
      <div>
        <CashierForm showModalFor={"edit"} />
      </div>
    </div>
  );
};

export default EditCashier;
