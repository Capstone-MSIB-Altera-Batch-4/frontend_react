import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "../../element/Textfield/Textfield";
import "./CashierForm.css";
import InputErrorMessage from "../../element/InputErrorMessage/InputErrorMessage";
import PrimaryButton from "../../element/Button/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../element/Button/SecondaryButton/SecondaryButton";
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import InputCategoryModal from "../Modal/InputCategoryModal/InputCategoryModal";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCashier, updateCashier } from "../../config/redux/actions/cashierActions";

const CashierForm = ( {filterData, showModalFor} ) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  console.log(showModalFor)
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let initialValues = {
    id: "",
    username: "",
    role: ""
  };

  if (showModalFor === "edit") {
    console.log(showModalFor)
    initialValues = {
      id: filterData[0].id_code,
      username: filterData[0].name,
      role: filterData[0].role
    };
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object().shape({
      id: Yup.string().required("The id field must be filled in"),
      username: Yup.string().required("The employee name field must be filled in"),
      role: Yup.string().required("The role field must be filled in"),
    }),
    onSubmit: (values) => {
      console.log(values);
     

      if (showModalFor === "add") {
        dispatch(createCashier(values));
      }

      if (showModalFor === "edit") {
        dispatch(updateCashier(filterData[0].id, values))
      }

      navigate("/cashier", {
        state: {
          showSnackbar: true,
          action: `${showModalFor}`,
          variant: "success",
        },
      });
    },
  });
  return (
    <>
      <form>
        <div className="col w-100 text-start px-5">
          <div className="mb-3">
            <TextField
              htmlFor="id"
              label="ID Number"
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
            <TextField
              htmlFor="username"
              label="Employee Name"
              placeholder="Input employee name"
              id="username"
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.username && formik.touched.username
                  ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                  : "form-control mt-1"
              }
              onClearInput={() => formik.setFieldValue("username", "", false)}
            />
            {formik.errors.username && formik.touched.username && (
              <InputErrorMessage label={formik.errors.username} />
            )}
          </div>
          <div className="mb-3">
            <TextField
              htmlFor="role"
              label="Role"
              placeholder="Input role"
              id="role"
              type="text"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.role && formik.touched.role
                  ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                  : "form-control mt-1"
              }
              onClearInput={() => formik.setFieldValue("role", "", false)}
            />
            {formik.errors.role && formik.touched.role && (
              <InputErrorMessage label={formik.errors.role} />
            )}
          </div>
        </div>
        <div className="d-flex gap-5 justify-content-center my-5">
          <Link to="/cashier">
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
            role={"Cashier"}
            action={formik.handleSubmit}
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

export default CashierForm;
