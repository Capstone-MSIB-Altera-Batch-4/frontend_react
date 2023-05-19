import React from "react"
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.style.css"
import Button from "../../element/button/button";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required(),
            password: Yup.string().min(8, "Minimal panjang password 8").required(),
        }),

    });
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="login-Img col-7 py-5 ">
                    <img
                        src="../../src/assets/img/imglogin.png"
                        className="loginImg"
                    />
                </div>
                <div className="login-Form col-5">
                    <div>
                        <h2 className=" fs-2">
                            Back to your <br />
                            <strong>powerfull</strong><br />
                            synchronize<br />
                            <strong>system.</strong>
                        </h2>
                        <p>Login to maximize the features</p>
                    </div>
                    <form>
                        <div className="py-2 pt-2 fw-bold">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className={`form-control ${formik.errors.username && `is-invalid`} `}
                                id="username"
                                placeholder="username"
                                aria-label="username"
                                name="username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                            />
                            <div className="invalid-feedback">{formik.errors.username}</div>
                        </div>
                        <div className="py-2 pt-2 fw-bold">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className={`form-control ${formik.errors.password && `is-invalid`} `}
                                id="password"
                                placeholder="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                            <div className="invalid-feedback">{formik.errors.password}</div>
                        </div>
                        <a className="btn-showpass">show password</a>
                        <div className=" d-grid pt-5" >
                            <Button
                                btnName="Login"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div >

    )


}

export default Login