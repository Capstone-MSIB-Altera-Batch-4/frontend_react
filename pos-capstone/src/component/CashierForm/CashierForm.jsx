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

const CashierForm = ({ filterData, showModalFor }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCategory, setShowCategory] = useState(false);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  let initialValues = {}

  if (showModalFor === "edit") {
    initialValues = {
      id_code: filterData[0].id_code,
      username: filterData[0].name,
      role: filterData[0].role
    };
  } else {
    initialValues = {
      username: "",
      password: "",
      confirmPassword: "",
      role: ""
    };
  }

  let validationSchema = Yup.object().shape({
    role: Yup.string()
      .required('The role field must be filled in'),
  });

  if (showModalFor !== 'edit') {
    validationSchema = validationSchema.shape({
      username: Yup.string()
        .required('The employee name field must be filled in'),
      password: Yup.string()
        .required('The password field must be filled in'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('The confirm password field must be filled in'),
    });
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
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

  console.log(formik.errors)
  return (
    <>
      <form>
        <div className="col w-100 text-start px-5">
          {showModalFor === "edit" && (
            <div className="mb-3">
              <TextField
                htmlFor="id_code"
                label="ID Number"
                placeholder="Input ID Code"
                name="id_code"
                type="text"
                id="id_code"
                value={formik.values.id_code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.id_code && formik.touched.id_code
                    ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                    : "form-control mt-1 "
                }
                readOnly={true}
              />
              {formik.errors.id_code && formik.touched.id_code && (
                <InputErrorMessage label={formik.errors.id_code} />
              )}
            </div>
          )}
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
              readOnly={showModalFor === "edit"}
              onClearInput={showModalFor === "edit" ? undefined : () => formik.setFieldValue("username", "", false)}
            />
            {formik.errors.username && formik.touched.username && (
              <InputErrorMessage label={formik.errors.username} />
            )}
          </div>
          {showModalFor !== "edit" && (
            <>
              <div className="mb-3">
                <TextField
                  htmlFor="password"
                  label="Password"
                  placeholder="Input password"
                  name="password"
                  type="text"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.password && formik.touched.password
                      ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                      : "form-control mt-1"
                  }
                  onClearInput={() => formik.setFieldValue("password", "", false)}
                />
                {formik.errors.password && formik.touched.password && (
                  <InputErrorMessage label={formik.errors.password} />
                )}
              </div>
              <div className="mb-3">
                <TextField
                  htmlFor="confirmPassword"
                  label="Confirm Password"
                  placeholder="Input confirm password"
                  name="confirmPassword"
                  type="text"
                  id="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.confirmPassword && formik.touched.confirmPassword
                      ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                      : "form-control mt-1"
                  }
                  onClearInput={() => formik.setFieldValue("confirmPassword", "", false)}
                />
                {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                  <InputErrorMessage label={formik.errors.confirmPassword} />
                )}
              </div>
            </>
          )}
          <div className="mb-3" style={{ position: 'relative' }}>
            <label htmlFor="role" className="form-label" style={{ fontFamily: 'Rubik', fontStyle: 'normal', fontWeight: 500, fontSize: '14px', color: '#000000' }}>
              Role
            </label>
            <div className="dropdown" style={{ color: '#989898', display: 'flex', borderRadius: '10px', border: '1px solid #ced4da', backgroundColor: '#FFFFFF', height: '2.7rem' }}>
              <button
                className="btn btn-dropdown text-start"
                type="button"
                id="role"
                style={{ fontFamily: 'inherit', fontWeight: 400, position: 'relative', width: '100%', backgroundColor: 'transparent', cursor: 'pointer', color: '#000000', margin: "-0.3em 0 0 0.3em" }}
                onClick={() => {
                  document.getElementById("roleOptions").classList.toggle("show");
                }}
              >
                {formik.values.role ? formik.values.role : "Select Role"}
              </button>
              <ul className={`dropdown-menu ${formik.values.role ? 'show' : ''}`} id="roleOptions" aria-labelledby="role" style={{ minWidth: '20rem', backgroundColor: 'rgba(231, 231, 231, 1)', position: 'absolute', top: '100%', left: 0, marginTop: '0.5rem' }}>
                <li>
                  <button
                    className={`dropdown-item ${formik.values.role === 'cashier' ? 'active' : ''}`}
                    type="button"
                    onClick={() => {
                      formik.setFieldValue('role', 'cashier');
                      document.getElementById("roleOptions").classList.remove("show");
                    }}
                    style={{ backgroundColor: 'transparent', color: '#000000' }}
                    onMouseEnter={(event) => event.target.style.backgroundColor = '#dbdbdb'}
                    onMouseLeave={(event) => event.target.style.backgroundColor = 'transparent'}
                  >
                    cashier
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${formik.values.role === 'kepala cashier' ? 'active' : ''}`}
                    type="button"
                    onClick={() => {
                      formik.setFieldValue('role', 'kepala cashier');
                      document.getElementById("roleOptions").classList.remove("show");
                    }}
                    style={{ backgroundColor: 'transparent', color: '#000000' }}
                    onMouseEnter={(event) => event.target.style.backgroundColor = '#dbdbdb'}
                    onMouseLeave={(event) => event.target.style.backgroundColor = 'transparent'}
                  >
                    kepala cashier
                  </button>
                </li>
              </ul>
            </div>
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
