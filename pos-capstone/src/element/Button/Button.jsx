import React from "react";
import "./Button.style.css"

const Button = (props) => {

    return (
        <>
            <button 
                className={props.className}
            >
                {props.btnName}
            </button>
        </>
    )

}

export default Button