import React from "react";
import "./InputDate.style.css"
import TextField from "../Textfield/Textfield";

const InputDate = (props) => {

    return (
        
        <div id="inputdate">
            <label htmlFor={props.htmlFor} className="form-label">
                {props.label}
            </label>
            <div class="input-group">
                <input
                    className={props.className}
                    type="date"
                    id={props.id}
                    name={props.name}
                    style={props.style}
                    value={props.value}
                    onChange={props.onChange}
                    onFocus={props.onFocus}
                    onBlur={props.onBlur}
                    placeholder={props.placeholder}
                />
            </div>
        </div>

    )

}

export default InputDate