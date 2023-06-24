import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../../data/DummyData";
import { PencilFill } from "react-bootstrap-icons";
import CashierForm from "../../component/CashierForm/CashierForm";
import { useSelector } from "react-redux";

const EditCashier = () => {
  const { id } = useParams();
  const loading = useSelector( state => state.cashiers.loading)
  const cashiers = useSelector(state => state.cashiers.cashiers.data);
  console.log(cashiers)

  if (!cashiers || cashiers.length === 0) {
    console.log("Data anggota tidak tersedia. Mengarahkan ke halaman cashier...");
    window.location.href = "/cashier";
    return null;
  }

  const filteredCashier = cashiers.filter(cashier => cashier.id === parseInt(id));
  console.log(filteredCashier)

  // const products = productsData[id];
  // console.log(products);

  return (
    <>
    {loading ?
      <Loader
        secondaryColor="#B1464A"
        color="#FFF0DE"
      />:
    <div className="col overflow-hidden">
      <div className="my-5 justify-content-start">
        <div className="d-flex gap-5 m-5">
          <PencilFill className="mt-1" />
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
        <CashierForm filterData={filteredCashier} showModalFor="edit" />
      </div>
    </div>}
    </>
  );
};

export default EditCashier;
