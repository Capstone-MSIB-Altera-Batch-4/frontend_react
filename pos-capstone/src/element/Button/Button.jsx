import React from "react";
import "./Button.style.css"

const Button = (props) => {

    return (
        <>
            <button 
                className="btn text-white"
            >
                {props.btnName}
            </button>
        </>
    )

}

export default Button