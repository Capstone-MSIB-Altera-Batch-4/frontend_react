import React, { useState } from "react";
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

const ProductFrom = ({ showModalFor }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      category: "",
      stock: "",
      price: "",
      unit: ""
    },
    validationSchema: Yup.object().shape({
      id: Yup.string().required("The id field must be filled in"),
      name: Yup.string().required("The name field must be filled in"),
      category: Yup.string().required("The category field must be filled in"),
      stock: Yup.number().required("The stock field must be filled in"),
      price: Yup.number().required("The price field must be filled in"),
      unit: Yup.string().required("The unit field must be filled in"),
    }),
    onSubmit: (values, actions) => {
      actions.resetForm();
      console.log(values);
      alert("data", JSON.stringify(values))
      // navigate('')
    },
  });
  return (
    <>
      <form onSubmit={""}>
        <div className="col w-100 text-start">
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
              <InputCategory />
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
              type="text"
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
            <SecondaryButton
              type="button"
              databstoggle="collapse"
              databstarget="#filter"
              label="Cancel"
            />
          </Link>
          <PrimaryButton
            type="button"
            onClick={() => setShowConfirmModal(true)}
            className="px-4"
            label="Save"
          />
        </div>

        {/* MODAL */}
        <div>
          <ConfirmModal
            show={showConfirmModal}
            handleClose={() => setShowConfirmModal(false)}
            confirmFor={showModalFor}
            role={"Product"}
            action={() => {
              {formik.handleSubmit}
              //kalo udh pake data asli, nnti navigate sekalian atur di submit
              navigate("/products", {
                state: {
                showSnackbar: true,
                action: `${showModalFor}`,
                variant: "success"
              },
            })
            }}
          />
        </div>
        <div>
          <InputCategoryModal
            show={showCategory}
            handleClose={() => setShowCategory(false)}
          />
        </div>
      </form>
    </>
  );
};

export default ProductFrom;