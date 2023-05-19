import React from "react"
import "./Login.style.css"
import Button from "../../element/button/button";
import LoginForm from "../../component/LoginForm/LoginForm"

const Login = () => {

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
                    <div className="mt-5">
                        <LoginForm />
                    </div>

                </div>
            </div>
        </div >

    )


}

export default Login