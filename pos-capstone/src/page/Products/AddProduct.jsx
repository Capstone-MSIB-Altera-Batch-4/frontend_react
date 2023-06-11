import React from "react";
import ProductForm from "../../component/ProductForm/ProductForm";
import PageTitle from "../../element/PageTitle/PageTitle";

const AddProduct = () => {
  return (
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
  );
};

export default AddProduct;
