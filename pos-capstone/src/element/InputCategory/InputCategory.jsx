import React from "react";
import Dropdown from "../Dropdown/Dropdown"
import { useState } from "react";

const InputCategory = () => {
    const [selected, setSelected] = useState('')
    const options = ["React", "Vue", "Angular"]
    
    return (
        <>
            <Dropdown 
                label = "Category"
                id="dropdown"
                name="dropdown"
                className="dropdown"
                placeholder = {selected?selected:`Select a Category`}
                options= {options.map((item, idx) =>
                    <li key={idx}>
                        <a
                            className={(selected && options[idx]==selected)
                                ?'dropdown-item active'
                                :'dropdown-item'}
                            onClick={()=>setSelected(options[idx])}
                        >
                            {item}
                        </a>
                    </li>
                )}

            />
        </>
    )

}

export default InputCategory