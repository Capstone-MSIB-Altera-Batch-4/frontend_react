import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom"
import TextField from '../../element/Textfield/Textfield';
import { useEffect, useState } from 'react';
import ShowPassword from '../../element/ShowPassword/ShowPassword';
import InputErrorMessage from '../../element/InputErrorMessage/InputErrorMessage';
import PrimaryButton from '../../element/Button/PrimaryButton/PrimaryButton';
import api from '../../config/redux/api/api';
import Loader from '../../element/Loader/Loader';

const LoginForm = () => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            username: Yup.string()
                .required('The username field must be filled in'),
            password: Yup.string()
                .required('The password field must be filled in'),
        }),
        onSubmit: async (values, actions) => {
            actions.resetForm();
            setLoading(true);
            setError(null);

            api.post('/login', values)
                .then(response => {
                    const token = response.data.data.token;
                    sessionStorage.setItem("token", JSON.stringify(token));
                    navigate('/dashboard')
                })
                .catch(error => {
                    setError(error.response.data.meta.message);
                });

            setLoading(false);

        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
                <TextField
                    htmlFor="username"
                    label="Username"
                    placeholder="Input Username"
                    type="text"
                    id="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                        formik.errors.username && formik.touched.username
                            ? 'form-control mt-1 is-invalid bg-danger bg-opacity-10'
                            : 'form-control mt-1'
                    }
                    onClearInput={() => formik.setFieldValue('username', '', false)}
                />
                {formik.errors.username && formik.touched.username && (
                    <InputErrorMessage
                        label={formik.errors.username}
                    />
                )}

            </div>
            <div className="mb-3">
                <TextField
                    htmlFor="password"
                    label="Password"
                    placeholder="Input Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                        formik.errors.password && formik.touched.password
                            ? 'form-control mt-1 is-invalid bg-danger bg-opacity-10'
                            : 'form-control mt-1'
                    }
                    onClearInput={() => formik.setFieldValue('password', '', false)}
                />
                {formik.errors.password && formik.touched.password && (
                    <InputErrorMessage
                        label={formik.errors.password}
                    />
                )}
            </div>
            <ShowPassword
                onClick={() => setShowPassword(!showPassword)}
                label={showPassword ? 'Hide Password' : 'Show Password'}
            />
            {error && (
                <div className="text-white mt-3 w-100 text-center py-2 px-3 rounded-lg bg-danger">
                    {error}
                </div>
            )}
            <div className='mt-5'>
                <PrimaryButton
                    className="btn text-white w-100 position-relative"
                    label="Login"
                    type="submit"
                    disabled={loading}
                />
            </div>

        </form >
    )
}
export default LoginForm