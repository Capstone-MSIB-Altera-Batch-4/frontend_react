import React, {useEffect, useState} from "react";
import ProductForm from "../../component/ProductForm/ProductForm";
import PageTitle from "../../element/PageTitle/PageTitle";
import { useParams } from "react-router-dom";
import { productsData } from "../../data/DummyData";
import { useSelector, useDispatch } from "react-redux";
import api from "../../config/redux/api/api";
import { getProducts, getProductsbyid } from "../../config/redux/actions/productActions"
import Loader from "../../element/Loader/Loader";


const EditProduct = () => {
  const { id } = useParams();
  const product = useSelector(state => state.products.products.data)
  const loading = useSelector(state => state.products.loading)

  console.log(product)

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getProductsbyid(id));
    }, 200);
  }, [])
  return (
    <> {loading ? 
      <Loader
        secondaryColor="#B1464A"
        color="#FFF0DE"
      /> :
        <div className="col">
          <div className="row col-md-8 col-sm-7 container-fluid mx-auto">
            <div className="my-4 pt-5 text-center">
              <PageTitle title="Edit Product" />
            </div>
            <div>
              <ProductForm showModalFor={"edit"} dataEdit={product}/>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default EditProduct;