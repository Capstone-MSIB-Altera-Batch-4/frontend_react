import React from "react";
import PageTitle from "../../element/PageTitle/PageTitle";
import { useParams } from "react-router-dom";
import { productsData } from "../../data/DummyData";
import { PencilFill } from "react-bootstrap-icons";
import CashierForm from "../../component/CashierForm/CashierForm";

const EditCashier = () => {
  const { id } = useParams();

  const products = productsData[id];
  console.log(products);

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
                Edit employee data
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-5" style={{ backgroundColor: "#FDDFDF" }}>
        <PageTitle title="Employee Information" />
      </div>
      <div>
        <CashierForm showModalFor={"edit"} />
      </div>
    </div>
  );
};

export default EditCashier;
