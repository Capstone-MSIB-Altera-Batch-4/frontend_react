import React from "react"
import "./Login.style.css"
import LoginForm from "../../component/LoginForm/LoginForm"

const Login = () => {

    return (

        <div className="container-fluid">
            <div className="login row">
                <div className="login-Img col-7 py-5 ">
                    
                    <img
                        className="loginImg img-fluid"
                        src="../../src/assets/img/imglogin.png"
                    />
                </div>
                <div className="login-Form col-5">
                    <div>
                        <h2 className="login-Title pt-4" style={{fontSize:48}}>
                            Back to your <br />
                            <strong>powerfull</strong><br />
                            synchronize<br />
                            <strong>system.</strong>
                        </h2>
                        <p>Login to maximize the features</p>
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