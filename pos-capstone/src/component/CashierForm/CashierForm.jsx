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

const CashierForm = ({ showModalFor }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: "",
      name_employee: "",
      position: "",
      joined: "",
    },
    validationSchema: Yup.object().shape({
      id: Yup.string().required("The id field must be filled in"),
      name_employee: Yup.string().required(
        "The employee name field must be filled in"
      ),
      position: Yup.number().required("The position field must be filled in"),
      joined: Yup.string().required("The category field must be filled in"),
    }),
    onSubmit: (values, actions) => {
      actions.resetForm();
      console.log(values);
      alert("data", JSON.stringify(values));
      // navigate('')
    },
  });
  return (
    <>
      <form onSubmit={() => setShowConfirmModal(true)}>
        <div className="col w-100 text-start">
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
              htmlFor="name"
              label="Employee Name"
              placeholder="Input employee name"
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
          <div className="mb-3">
            <TextField
              htmlFor="position"
              label="Position"
              placeholder="Input position"
              id="position"
              type="text"
              name="position"
              value={formik.values.position}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.position && formik.touched.position
                  ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                  : "form-control mt-1"
              }
              onClearInput={() => formik.setFieldValue("position", "", false)}
            />
            {formik.errors.position && formik.touched.position && (
              <InputErrorMessage label={formik.errors.position} />
            )}
          </div>
          <div className="mb-3">
            <TextField
              htmlFor="joined"
              label="Joined"
              placeholder="Input joined"
              id="joined"
              type="text"
              name="joined"
              value={formik.values.joined}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.joined && formik.touched.joined
                  ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                  : "form-control mt-1"
              }
              onClearInput={() => formik.setFieldValue("joined", "", false)}
            />
            {formik.errors.joined && formik.touched.joined && (
              <InputErrorMessage label={formik.errors.joined} />
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
            action={() => {
              {
                formik.handleSubmit;
              }
              //kalo udh pake data asli, nnti navigate sekalian atur di submit
              navigate("/cashier", {
                state: {
                  showSnackbar: true,
                  action: `${showModalFor}`,
                  variant: "success",
                },
              });
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

export default CashierForm;
