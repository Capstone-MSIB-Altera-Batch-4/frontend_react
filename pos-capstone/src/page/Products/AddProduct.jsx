import React from "react";
import ProductForm from "../../component/ProductForm/ProductForm";
import PageTitle from "../../element/PageTitle/PageTitle";
import { useSelector } from "react-redux";
import Loader from "../../element/Loader/Loader";

const AddProduct = () => {
  const loading = useSelector(state => state.products.loading)

  console.log("loading", loading)

  return (
    <>
    {loading ? 
      <Loader 
        secondaryColor="#B1464A"
        color="#FFF0DE"
      /> :
        <div className="col">
          <div className="row col-md-8 col-sm-7 container-fluid mx-auto">
            <div className="my-4 pt-5 text-center">
              <PageTitle title="Add Product" />
            </div>
            <div>
              <ProductForm showModalFor={"add"} />
            </div>
          </div>
        </div>
     }</>
  );
};

export default AddProduct;
