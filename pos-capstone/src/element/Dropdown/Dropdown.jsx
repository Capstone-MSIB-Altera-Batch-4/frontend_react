import React from "react";
import "./Dropdown.style.css"


const Dropdown = (props) => {
    
    return (
        <div id="dropdown" >
            <label htmlFor={props.htmlFor} className="form-label">
                {props.label}
            </label>
            
                <a
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className={props.className}
                    id={props.id}
                    name={props.name}
                    style={props.style}
                    onBlur={props.onBlur}
                    onChange={props.handleChange}
                >{props.placeholder}
                    <button className="btn-dropdown">
                        <span className="dropdown-toggle"></span>
                    </button>
                </a>
           
            <ul className="dropdown-menu ">
                {props.options}
            </ul>


        </div >
    )

}

export default Dropdown