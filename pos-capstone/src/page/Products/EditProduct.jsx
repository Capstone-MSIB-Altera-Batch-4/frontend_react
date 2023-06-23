import React, {useEffect, useState} from "react";
import ProductForm from "../../component/ProductForm/ProductForm";
import PageTitle from "../../element/PageTitle/PageTitle";
import { useParams } from "react-router-dom";
import { productsData } from "../../data/DummyData";
import { useSelector, useDispatch } from "react-redux";
import api from "../../config/redux/api/api";
import { getProducts } from "../../config/redux/actions/productActions"


const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([])

  const dispatch = useDispatch();
  // const productData = useSelector(state => state.products.products.data);

  // useEffect(() => {
  //   dispatch(getProducts())
  // }, [dispatch]);


  // const product = productData?.filter(item => item.id === parseInt(id));

  // console.log("product ID", product)

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
          <ProductForm showModalFor={"edit"} dataEdit={product}/>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;