import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "../../element/Textfield/Textfield";
import InputCategory from "../../element/InputCategory/InputCategory";
import InputImage from "../../element/InputImage/InputImage";
import "./ProductForm.css";
import { PencilFill } from "react-bootstrap-icons";
import InputErrorMessage from "../../element/InputErrorMessage/InputErrorMessage";
import PrimaryButton from "../../element/Button/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../element/Button/SecondaryButton/SecondaryButton";
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import InputCategoryModal from "../Modal/InputCategoryModal/InputCategoryModal";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProduct, updateProduct } from "../../config/redux/actions/productActions";

const ProductFrom = ({ showModalFor, dataEdit }) => {
  const [product, setProduct] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const isEditMode = !!productId;

  // useEffect(() => {
    
  //   if (dataEdit) {
  //     setTimeout(() => {
  //       setProduct(dataEdit)
  //       console.log("Data kesimpennn")
  //     }, 1000);
  //   }
  // }, [dataEdit])

  let initialValues = {
    id: "",
    name: "",
    category: "Sushi",
    image: "https://source.unsplash.com/featured?sushi",
    stock: "",
    price: "",
    unit: "",
  };

  // console.log("editmode?", isEditMode);
  console.log("DATA", dataEdit);
  // console.log("Category", initialValues)

  console.log("mode", showModalFor)

  // useEffect(() => {
    if (showModalFor === 'edit') {
      initialValues = {
        id: dataEdit.products_id,
        name: dataEdit.name,
        category: dataEdit.category,
        image: dataEdit.image_url,
        stock: dataEdit.quantity,
        price:  dataEdit.price,
        unit: dataEdit.unit,
      };
    }
  // },[!showModalFor])
  

  console.log("Category", initialValues)

  // if (isEditMode) {
  //   // if (dataEdit) {
  //     initialValues = {
  //       id: dataEdit.products_id,
  //       name: dataEdit.name,
  //       category: dataEdit.category,
  //       image: dataEdit.image_url,
  //       stock: dataEdit.quantity,
  //       price: dataEdit.price,
  //       unit: dataEdit.unit,
  //     };
  //   // }
  // }

  // useEffect(() => {
    
  //   if (dataEdit) {
  //     setTimeout(() => {
  //       setProduct(dataEdit)
  //       console.log("Data kesimpennn")
  //     }, 1000);
  //   }
  // }, [dataEdit])

  // if (isEditMode) {
  //   // if (product) {
  //     initialValues = {
  //       id: product.products_id,
  //       name: product.name,
  //       category: product.category,
  //       image: product.image_url,
  //       stock: product.quantity,
  //       price: product.price,
  //       unit: product.unit
  //     }
  //   // }
  // }

  //untuk ngatur biar modal muncul sama simpen data inputan
  const ModalAction = (values) => {
    setData(values);
    setShowConfirmModal(true);
  };

  //function untuk submit data
  // const handleSubmit = () => {
  //   if (isEditMode) {
  //     console.log("ini update", JSON.stringify(data));
  //     dispatch(updateProduct(productId, data));
  //   }else{
  //     console.log("ini create", data);
  //     console.log(JSON.stringify(data));
  //     dispatch(createProduct((data)));
  //   }

    console.log("Cek error", createProduct.status)
    // if (dispatch.type) {
      
    // }
    // navigate("/products", {
    //   state: {
    //   showSnackbar: true,
    //   action: `${showModalFor}`,
    //   variant: "success"
    // }})
    // alert("data", JSON.stringify(data.category))
  // };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object().shape({
      id: Yup.string().required("The id field must be filled in"),
      name: Yup.string().required("The name field must be filled in"),
      category: Yup.string().required("The category field must be filled in"),
      image: Yup.string().required("The product image field must be filled in"),
      stock: Yup.number().required("The stock field must be filled in"),
      price: Yup.number().required("The price field must be filled in"),
      unit: Yup.string().required("The unit field must be filled in"),
    }),
  //   onSubmit: (values, actions) => {
  //     // actions.resetForm();
  //     console.log(values);
  //     alert("data", JSON.stringify(values))
  //   navigate("/products", {
  //         state: {
  //         showSnackbar: true,
  //         action: `${showModalFor}`,
  //         variant: "success"
  //       },
  //   }),
  // }
      onSubmit: (values, actions) => {
        alert("data", JSON.stringify(values))
        console.log("DATA", values);
        // dispatch(createProduct(values));
        navigate("/products", {
          state: {
            showSnackbar: !!true,
            action: `${showModalFor}`,
            variant: "success"
          },
        })
      }
  });

  return (
    <>
      {/* <form id="create-edit-form"> */}
      <div className="col w-100 text-start" id="product-form">
        <div className="mb-3">
          <TextField
            htmlFor="id"
            label="Id"
            placeholder="Input id"
            name="id"
            type="text"
            id="id"
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.id && formik.touched.id
                ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                : "form-control mt-1"
            }
            onClearInput={() => formik.setFieldValue("id", "", false)}
          />
          {formik.errors.id && formik.touched.id && (
            <InputErrorMessage label={formik.errors.id} />
          )}
        </div>
        <div className="mb-3">
          <InputImage label="Image" className="img-area" />
        </div>
        <div className="mb-3">
          <TextField
            htmlFor="name"
            label="Name"
            placeholder="Input Product Name"
            id="name"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.name && formik.touched.name
                ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                : "form-control mt-1"
            }
            onClearInput={() => formik.setFieldValue("name", "", false)}
          />
          {formik.errors.name && formik.touched.name && (
            <InputErrorMessage label={formik.errors.name} />
          )}
        </div>
        <div className="mb-3 row input-category-field">
          <div className="col-md-11 select-category">
            <InputCategory selectedOption={formik.values.category} />
          </div>
          <div
            className="col-md-1 input-category-icon p-2"
            onClick={() => setShowCategory(true)}
          >
            <PencilFill color="white" className="pencil-icon" />
          </div>
        </div>
        <div className="mb-3">
          <TextField
            htmlFor="stock"
            label="Stock"
            placeholder="Input Stock"
            id="stock"
            type="text"
            name="stock"
            value={formik.values.stock}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.stock && formik.touched.stock
                ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                : "form-control mt-1"
            }
            onClearInput={() => formik.setFieldValue("stock", "", false)}
          />
          {formik.errors.stock && formik.touched.stock && (
            <InputErrorMessage label={formik.errors.stock} />
          )}
        </div>
        <div className="mb-3">
          <TextField
            htmlFor="price"
            label="Price"
            placeholder="Input Price"
            id="price"
            type="number"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.price && formik.touched.price
                ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                : "form-control mt-1"
            }
            onClearInput={() => formik.setFieldValue("price", "", false)}
          />
          {formik.errors.price && formik.touched.price && (
            <InputErrorMessage label={formik.errors.price} />
          )}
        </div>
        <div className="mb-3">
          <TextField
            htmlFor="unit"
            label="Unit"
            placeholder="Input Unit"
            id="unit"
            type="text"
            name="unit"
            value={formik.values.unit}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.unit && formik.touched.unit
                ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                : "form-control mt-1"
            }
            onClearInput={() => formik.setFieldValue("unit", "", false)}
          />
          {formik.errors.unit && formik.touched.unit && (
            <InputErrorMessage label={formik.errors.unit} />
          )}
        </div>
      </div>
      <div className="d-flex gap-5 justify-content-center my-5">
        <Link to="/products">
          <SecondaryButton type="button" label="Cancel" />
        </Link>
        <PrimaryButton
          type="button"
          onClick={() => setShowConfirmModal(true)}
          className="px-4"
          label="Save"
        />
      </div>

      {/* MODAL */}
      <div form="product-form">
        <ConfirmModal
          show={showConfirmModal}
          handleClose={() => setShowConfirmModal(false)}
          confirmFor={showModalFor}
          role={"Product"}
          action={formik.handleSubmit}
        />
      </div>
      <div>
        <InputCategoryModal
          show={showCategory}
          handleClose={() => setShowCategory(false)}
        />
      </div>
      {/* </form> */}
    </>
  );
};

export default ProductFrom;