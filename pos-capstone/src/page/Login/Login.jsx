import React, { useState } from "react"
import "./Login.style.css"
import LoginForm from "../../component/LoginForm/LoginForm"
import imgLogin from "../../assets/img/imglogin.png"
import Loader from "../../element/Loader/Loader"

const Login = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log(loading)

    return (
        <>
            {loading && (
                <div className="loader-container-login">
                    <Loader secondaryColor="#B1464A" color="#FFF0DE" />
                </div>
            )}

            {!loading && (
                <div className="container-fluid">
                    <div className="login row">
                        <div className="login-Img col-lg-7 py-5">
                            <img
                                className="loginImg img-fluid"
                                src={imgLogin}
                            />
                        </div>
                        <div className="login-Form col-lg-5">
                            <div>
                                <h1 className="login-Title pt-4">
                                    Back to your <br />
                                    <strong>powerfull</strong><br />
                                    synchronize<br />
                                    <strong>system.</strong>
                                </h1>
                                <p className="fs-5">Login to maximize the features</p>
                            </div>
                            <div className="mt-4">
                                <LoginForm setLoading={setLoading} setError={setError} error={error} />
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </>
    )
}

export default Login