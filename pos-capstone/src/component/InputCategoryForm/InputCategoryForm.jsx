import React from 'react'
import { FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '../../element/Textfield/Textfield';
import { useState } from 'react';
import InputErrorMessage from '../../element/InputErrorMessage/InputErrorMessage';
import Button from '../../element/Button/Button';
import { Plus } from 'react-bootstrap-icons';
import './InputCategoryForm.css'
import { useDispatch } from 'react-redux';
import { createCategory } from '../../config/redux/actions/productActions';

const validationSchema = Yup.object().shape({
  people: Yup.array().of(
    Yup.object().shape({
      category: Yup.string()
        .required('This field must be filled in'),
    })
  )
});

const InputCategoryForm = ({handleClose}) => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([""])

  // let catId = 8
  // let initialValues = {
  //   name: ""
  // }
  
  return (
    <div>
      <Formik
        initialValues={{ category: "" }}
        onSubmit={(values) => {
          const categories = { name:values.category}
          values.category.map((data,idx)=>{
            dispatch(createCategory({name: data}));
            dispatch(getCategory())
            console.log(data)
          })
          
          // dispatch(createCategory(values.category));
          // console.log("CATEGORY", values.category.name)
          console.log(values)
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleSubmit, handleChange, errors }) => (
          <Form onSubmit={handleSubmit}>
            <FieldArray name="category">
              {({ remove, push }) => (
                <div>
                  {values.category && values.category.map((category, index) => {
                    return (
                      <div key={index}>
                        <TextField
                          placeholder="input category"
                          type="text"
                          id="category"
                          name={`category.${index}`}
                          value={category}
                          onChange={handleChange}
                          className={
                            errors.category
                              ? "form-control mt-1 is-invalid bg-danger bg-opacity-10"
                              : "form-control mt-1"
                          }
                          onClearInput={
                            () => remove(index)
                          }
                        />
                      </div>
                    );
                  })}
                  <button
                    type="button"
                    className="bg-white border border-0 d-flex mt-3 justify-content-start"
                    onClick={() => push("")}
                  >
                    <div className="d-flex gap-2 text-secondary align-items-center">
                      <Plus color="#6C6C6C" size={"20px"} />
                      Add option
                    </div>
                  </button>
                </div>
              )}
            </FieldArray>
            <div className="mt-5 d-flex justify-content-end">
              <Button
                className="btn text-white button-save"
                btnName="Save"
                onClick={handleClose}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default InputCategoryForm;