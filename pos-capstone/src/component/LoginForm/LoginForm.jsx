import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom"
import TextField from '../../element/Textfield/Textfield';
import { useState } from 'react';
import ShowPassword from '../../element/ShowPassword/ShowPassword';
import InputErrorMessage from '../../element/InputErrorMessage/InputErrorMessage';
import Button from '../../element/Button/PrimaryButton/PrimaryButton'

const LoginForm = () => {
    // const navigate = useNavigate()

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
        onSubmit: (values, actions) => {
            actions.resetForm();
            console.log(values)
            // navigate('')

        },
    })

    return (
        <form>
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
            <div className='mt-5'>
                <Button
                    className="btn text-white w-100"
                    label="Login"
                />
            </div>

        </form >
    )
}
export default LoginForm