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
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct, selectedCategory } from "../../config/redux/actions/productActions";

const ProductFrom = ({ showModalFor, dataEdit }) => {
  const [product, setProduct] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selected = useSelector(state => state.products.selectedCategory);
  const cekStatus = useSelector(state => state.products.error)
  const productImage = useSelector(state => state.products.image)
  //console.log(productImage)

 

  useEffect(() => {
    dispatch(selectedCategory())
    //console.log("data category diget")
  }, [dispatch]);

  //console.log("Categorinya", selected)

  //console.log(product)

  let initialValues = {}

  // useEffect(() => {
    if (showModalFor === 'edit') {
      //console.log(showModalFor)
      //console.log("ini apa", dataEdit.name)
      initialValues = {
        id: dataEdit.products_id,
        name: dataEdit.name,
        category: dataEdit.category,
        image: dataEdit.image_url,
        stock: dataEdit.quantity,
        price:  dataEdit.price,
        unit: dataEdit.unit,
      }
    }else {
      initialValues = {
        id: "",
        name: "",
        category: "",
        image: "",
        stock: "",
        price: "",
        unit: "",
      }
    }
  // },[dataEdit])
  

  //console.log("Category", initialValues)
  //console.log("data di formik", data)


  //untuk ngatur biar modal muncul sama simpen data inputan
  const ModalAction = (values) => {
    //console.log("datanta", values)
    setData(values);
    setShowConfirmModal(true);
  };

  const handleSubmit = () => {
    let formData = new FormData()

    let complete = false

        // for (let value in data) {
        //   formData.append(value, data[value])
        // }
        formData.append("products_id", data.id)
        formData.append("products_name", data.name)
        formData.append("products_category", selected[0]?.id)
        // formData.append("-", productImage.path)
        formData.append("products_image", productImage)
        formData.append("products_quantity", data.stock)
        formData.append("products_price", data.price)
        formData.append("products_unit", data.unit)
        formData.append("products_description", "makanan ringan dan sushi")

       

        //submit data
        if (showModalFor === "edit") {
          dispatch(updateProduct(dataEdit.id, formData));
        }else {
          dispatch(createProduct(formData));
          navigate("/products", {
            state: {
              showSnackbar: !!true,
              action: `${showModalFor}`,
              variant: "success",
            },
          })
              return complete = true
        }

        //atur navigasi dan set error`
        if (cekStatus === "ERROR") {
          setShowConfirmModal(false);
          return Submit;
        } else if (complete ) {
          navigate("/products", {
            state: {
              showSnackbar: !!true,
              action: `${showModalFor}`,
              variant: "success",
            },
          });
        }
  }

  // //console.log(data)


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
      onSubmit: (values, actions) => {
        alert("data", JSON.stringify(values))
        //console.log("DATA INI", values);

        let formData = new FormData()

        for (let value in values) {
          formData.append(value, values[value])
        }

        for (let property of formData.entries()) {
          //console.log(property[0], property[1]);
        }

        // dispatch(createProduct(formData));
        // dispatch(createProduct(values));
        // navigate("/products", {
        //   state: {
        //     showSnackbar: !!true,
        //     action: `${showModalFor}`,
        //     variant: "success"
        //   },
        // })
      }
  });

  return (
    <>
      {/* <form id="create-edit-form"> */}
      <div className="col w-100 text-start" id="product-form" >
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
            <InputCategory name="category" 
              selectedOption={formik.values.category} 
              value={selected != undefined ? formik.values.category = selected[0]?.name : formik.values.category}
              className={
                formik.errors.category && formik.touched.category
                  ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                  : "form-control mt-1"
              }
            />
            {formik.errors.category && formik.touched.category && (
            <InputErrorMessage label={formik.errors.category} />
          )}
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
            onClearInput={()  => formik.setFieldValue("unit", "", false)}
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
          onClick={() => ModalAction(formik.values)}
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
          action={!cekStatus ? handleSubmit : formik.handleSubmit}
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