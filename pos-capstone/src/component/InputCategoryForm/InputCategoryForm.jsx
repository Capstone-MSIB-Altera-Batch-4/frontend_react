import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '../../element/Textfield/Textfield';
import { useState } from 'react';
import InputErrorMessage from '../../element/InputErrorMessage/InputErrorMessage';
import Button from '../../element/Button/Button';
import { Plus } from 'react-bootstrap-icons';
import './InputCategoryForm.css'

const InputCategoryForm = ({handleClose}) => {

    const [categoryList, setCategoryList] = useState([{category: ""}])

    const handleAddCategory = () => {
      setCategoryList([...categoryList, {category: ""}])
    };

    const handleRemove = (index) => {
        const categories = [...categoryList];
        categories.splice(index, 1);
        setCategoryList(categories)
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const categories = [...categoryList];
        categories[index][name] = value;
        setCategoryList(categories);
    };

    const formik = useFormik({
        initialValues: {
            category: "",
        },
        validationSchema: Yup.object().shape({
            category: Yup.string()
                .required('This field must be filled in'),
        }),
        onSubmit: (values, actions) => {
            console.log("values", values)
            // setCategoryList(values)
        },
    })

    console.log("Data", categoryList)
    // const categoryData = formik.values.category;
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {categoryList?.map((categoryItem, index) => (
          <>
            <div className="category-input-style mb-2">
              <TextField
                placeholder="input Category"
                type="text"
                id="category"
                value={categoryItem.category}
                onChange={(e) => handleChange(e, index)}
                className={
                  formik.errors.category
                    ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                    : "form-control mt-1"
                }
                onClearInput={() => handleRemove(index)}
              />
              {formik.errors.category && formik.touched.category && (
                <InputErrorMessage label={formik.errors.category} />
              )}
            </div>
          </>
        ))}
        <div className='d-flex mt-3 align-items-start mx-auto'>
          {categoryList.length !== 0 && categoryList.length < 5 && (
            <Button
              className={"bg-white border border-0"}
              btnName={
                <div className="d-flex gap-2 text-secondary align-items-center">
                  <Plus color="#6C6C6C" size={"20px"}/>
                  Add option
                </div>
              }
              onClick={handleAddCategory}
            />
          )}
        </div>
        <div className="mt-5 d-flex justify-content-end">
          <Button className="btn text-white button-save" btnName="Save" onClick={handleClose}/>
        </div>
      </form>
    </div>
  );
}

export default InputCategoryForm;