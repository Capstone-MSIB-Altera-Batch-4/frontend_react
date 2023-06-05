import React, {useState} from "react";
import ProductForm from "../../component/ProductForm/ProductForm";
import PageTitle from "../../element/PageTitle/PageTitle";
import { useParams } from "react-router-dom";
import { productsData } from "../../data/DummyData";


const EditProduct = () => {
  const { id } = useParams();

    const products = productsData[id];
    console.log(products);

//     const productData = props.value

//   if (searchInput.length > 0) {
//     productData.filter((data) => {
//         return data.name.match(searchInput);
//     })
//   }  `  

  return (
    <div className="col">
      <div className="row container-fluid col-md-8 col-sm-4 mx-auto">
        <div className="my-4 pt-5 text-center">
          <PageTitle title="Edit Product" />
        </div>
        <div>
          <ProductForm showModalFor={"edit"} />
        </div>
      </div>
    </div>
  );
};

export default EditProduct;