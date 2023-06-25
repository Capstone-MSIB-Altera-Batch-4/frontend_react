import React from "react";
import { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import Button from '../../element/Button/Button';
import { Plus } from 'react-bootstrap-icons';
import './InputCategoryForm.css'
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, deleteCategory, getCategory } from '../../config/redux/actions/productActions';
import TextField from '../../element/Textfield/Textfield';

const InputCategoryForm = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.products.category.data)
  console.log(categories)

  const [isAdd, setisAdd] = useState(false)

  const handlesave = () => {
    setisAdd(false)
  }

  const handledelete = (idx) => {
    dispatch(deleteCategory(idx))
    setTimeout(() => {
      dispatch(getCategory());
    }, 500)
    
  }

  const formik = useFormik({
    initialValues: {
      category: ""
    },
    validationSchema: Yup.object().shape({
      category: Yup.string().required("The category field must be filled in"),
    }),
    onSubmit: (values) => {
      console.log(values.category)
      dispatch(createCategory({ name : values.category}))
      setTimeout(() => {
        dispatch(getCategory());
      }, 500)
      setisAdd(false)
    }
  })


  return (
    <>
      <div>

        {categories?.map((data, idx) => 
          <div key={idx}>
            <TextField
              type="text"
              value={data.name}
              readOnly={'readOnly'}
              onChange={""}
              className={
                "form-control mt-1"
              }
              onClearInput={()=>handledelete(data.id)}
            />
          </div>
        )}
        {isAdd  && (
          <div >
            <TextField
              placeholder="input category"
              type="text"
              id="category"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              className={
                formik.errors.category
                  ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                  : "form-control mt-1"
              }
              onClearInput={()=>setisAdd(false)}
            />
          </div>)}
        <button
          type="button"
          className={
            (categories.length >= 5)
              ? `bg-white border border-0 d-flex mt-3 justify-content-start d-none`
              : `bg-white border border-0 d-flex mt-3 justify-content-start`}
          onClick={() => setisAdd(true)}
        >
          <div className={isAdd
            ?"d-none gap-2 text-secondary align-items-center"
            :"d-flex gap-2 text-secondary align-items-center"}>
            <Plus color="#6C6C6C" size={"20px"} />
            Add option
          </div>

        </button>
        <div className="mt-5 d-flex justify-content-end">
          <Button
            className="btn text-white button-save"
            btnName="Save"
            onClick={formik.handleSubmit}
          />
        </div>
      </div>
    </>
  )

}

export default InputCategoryForm