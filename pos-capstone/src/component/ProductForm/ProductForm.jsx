import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from "../../element/Textfield/Textfield";
import InputCategory from "../../element/InputCategory/InputCategory";
import InputImage from "../../element/InputImage/InputImage"

const ProductFrom = () => {
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
            id: Yup.number()
                .required('The username field must be filled in'),
            name: Yup.string()
                .required('The password field must be filled in'),
            category: Yup.string()
                .required('The password field must be filled in'),
            stock: Yup.number()
                .required('The password field must be filled in'),
            price: Yup.number()
                .required('The password field must be filled in'),
            unit: Yup.string()
                .required('The password field must be filled in'),
        }),
        onSubmit: (values, actions) => {
            actions.resetForm();
            console.log(values)
            // navigate('')

        },
    })
    return (
        <>
            <div className="col w-50 text-start">
                <div className="mb-3">
                    <TextField
                        htmlFor="id"
                        label="ID"
                        placeholder="Input id"
                        name="id"
                        type="text"
                        id="id"
                        value={formik.values.id}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                            formik.errors.id
                                ? 'form-control mt-1 is-invalid bg-danger bg-opacity-10'
                                : 'form-control mt-1'
                        }
                    />
                </div>
                <div className="mb-3">
                    <InputImage 
                        label="Image"
                    />
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
                            formik.errors.name
                                ? 'form-control mt-1 is-invalid bg-danger bg-opacity-10'
                                : 'form-control mt-1'
                        }
                    />
                </div>
                <div className="mb-3">
                    <InputCategory />
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
                            formik.errors.stock
                                ? 'form-control mt-1 is-invalid bg-danger bg-opacity-10'
                                : 'form-control mt-1'
                        }
                    />
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
                            formik.errors.price
                                ? 'form-control mt-1 is-invalid bg-danger bg-opacity-10'
                                : 'form-control mt-1'
                        }
                    />
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
                            formik.errors.unit
                                ? 'form-control mt-1 is-invalid bg-danger bg-opacity-10'
                                : 'form-control mt-1'
                        }
                    />
                </div>
            </div>
        </>
    )

}

export default ProductFrom