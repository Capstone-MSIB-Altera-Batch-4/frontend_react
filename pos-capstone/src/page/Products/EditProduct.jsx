import React, {useEffect, useState} from "react";
import ProductForm from "../../component/ProductForm/ProductForm";
import PageTitle from "../../element/PageTitle/PageTitle";
import { useParams } from "react-router-dom";
import { productsData } from "../../data/DummyData";
import { useSelector } from "react-redux";
import api from "../../config/redux/api/api";


const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([])

  // const productData = useSelector(state => state.products.products.data);
  // const product = productData.find(item => item.id === id);

  console.log("ID", id)

  const getProductById = () => {
    api.get(`/product/${id}`)
    .then(response => {
      setProduct(response.data.data)
    })
    // .catch(error => {
    //   setError(error.response.data.meta.message);
    // });
  }

  useEffect(() => {
    getProductById()
  }, [])

  console.log("Product seleectend", product)

  return (
    <div className="col">
      <div className="row col-md-8 col-sm-7 container-fluid mx-auto">
        <div className="my-4 pt-5 text-center">
          <PageTitle title="Edit Product" />
        </div>
        <div>
          <ProductForm showModalFor={"edit"} productId={id} dataEdit={product}/>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;