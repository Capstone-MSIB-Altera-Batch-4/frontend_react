import React from "react"
import "./Login.style.css"
import LoginForm from "../../component/LoginForm/LoginForm"
import imgLogin from "../../assets/img/imglogin.png"

const Login = () => {

    return (

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
                        <LoginForm />
                    </div>

                </div>
            </div>
        </div >

    )


}

export default Login