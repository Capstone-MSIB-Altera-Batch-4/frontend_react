import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "../../element/Textfield/Textfield";
import "./MembershipForm.css";
import InputErrorMessage from "../../element/InputErrorMessage/InputErrorMessage";
import PrimaryButton from "../../element/Button/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../element/Button/SecondaryButton/SecondaryButton";
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import InputCategoryModal from "../Modal/InputCategoryModal/InputCategoryModal";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateMember } from "../../config/redux/actions/memberActions";


const MembershipForm = ({ filterData, showModalFor }) => {
  const dispatch = useDispatch();


  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const navigate = useNavigate();

  //format date
  const dateString = filterData[0].birth_day;
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const currentYear = new Date().getFullYear();

  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);

  console.log(filterData[0].level)

  const formik = useFormik({
    initialValues: {
      id: filterData[0].id,
      name: filterData[0].name,
      email: filterData[0].email,
      phone: filterData[0].phone,
      birth_day: formattedDate,
      level: filterData[0].level
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("The name field must be filled in"),
      email: Yup.string().required("The email field must be filled in"),
      phone: Yup.number().required("The phone number field must be filled in"),
      birth_day: Yup.string()
      .required("The birthday day field must be filled in")
      .test(
        "valid-date",
        "Invalid year",
        (value) => parseInt(value?.split("-")[0]) <= currentYear
      ),
      level: Yup.string().required("The level field must be filled in"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(updateMember(values.id, values));

      navigate("/memberships", {
        state: {
          showSnackbar: true,
          action: `${showModalFor}`,
          variant: "success"
        },
      })
    },
  });
  return (
    <>
      <form>
        <div className="col w-100 text-start">
          <div className="mb-3">
            <TextField
              htmlFor="id"
              label="ID Customer"
              placeholder="Input id customer"
              name="id"
              type="text"
              id="id"
              value={formik.values.id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.id && formik.touched.id
                  ? "form-control mt-1 disabled is-invalid bg-danger bg-opacity-10"
                  : "form-control mt-1 disabled"
              }
              readOnly
              onClearInput
            />
            {formik.errors.id && formik.touched.id && (
              <InputErrorMessage label={formik.errors.id} />
            )}
          </div>
          <div className="mb-3">
            <TextField
              htmlFor="name"
              label="Name"
              placeholder="Input name of customer"
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
              htmlFor="email"
              label="Email"
              placeholder="Input email"
              id="email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.email && formik.touched.email
                  ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                  : "form-control mt-1"
              }
              onClearInput={() => formik.setFieldValue("email", "", false)}
            />
            {formik.errors.email && formik.touched.email && (
              <InputErrorMessage label={formik.errors.email} />
            )}
          </div>
          <div className="mb-3">
            <TextField
              htmlFor="phone"
              label="Phone number"
              placeholder="Input phone number"
              id="phone"
              type="number"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.phone && formik.touched.phone
                  ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                  : "form-control mt-1"
              }
              onClearInput={() => formik.setFieldValue("phone", "", false)}
            />
            {formik.errors.phone && formik.touched.phone && (
              <InputErrorMessage label={formik.errors.phone} />
            )}
          </div>
          <div className="mb-3">
            <TextField
              htmlFor="birth_day"
              label="Birthday"
              placeholder="Input birthday"
              id="birth_day"
              type="date"
              name="birth_day"
              value={formik.values.birth_day}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.birth_day && formik.touched.birth_day
                  ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                  : "form-control mt-1"
              }
              onClearInput={() => formik.setFieldValue("birth_day", "", false)}
            />
            {formik.errors.birth_day && formik.touched.birth_day && (
              <InputErrorMessage label={formik.errors.birth_day} />
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="level" className="form-label">
              Level
            </label>
            <select
              id="level"
              name="level"
              className={
                formik.errors.level && formik.touched.level
                  ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                  : "form-control mt-1"
              }
              value={formik.values.level}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled
            >
              <option value="Bronze">Bronze</option>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
            </select>
            {formik.errors.level && formik.touched.level && (
              <InputErrorMessage label={formik.errors.level} />
            )}
          </div>
        </div>
        <div className="d-flex gap-5 justify-content-center my-5">
          <Link to="/memberships">
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
            role={"Membership"}
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

export default MembershipForm;