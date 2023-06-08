import React from "react";
import CashierForm from "../../component/CashierForm/CashierForm";
import { PencilFill } from "react-bootstrap-icons";

const AddCashier = () => {
  return (
    <div className="col">
      <div className="row container-fluid">
        <div className="my-5 justify-content-start">
          <div className="row">
            <div className="col-md-1">
              <PencilFill />
            </div>
            <div className="col-md-10">
              <h3
                style={{
                  fontFamily: "rubik",
                  fontWeight: "600",
                  fontSize: "24px",
                  color: "#141414",
                  marginLeft: "-5%",
                }}
              >
                New employee data
              </h3>
            </div>
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
          <CashierForm showModalFor={"add"} />
        </div>
      </div>
    </div>
  );
};

export default AddCashier;
