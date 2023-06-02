import React from "react";
import "./PrimaryButton.css"

const PrimaryButton = (props) => {

    return (
        <div id="primarybutton">
        <button
            
            type={props.type}
            onClick={props.onClick}
            className={props.className}
        >
            {props.label}
        </button>
        </div>
        
    )

}

export default PrimaryButton