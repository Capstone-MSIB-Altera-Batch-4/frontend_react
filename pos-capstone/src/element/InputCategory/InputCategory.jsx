import React from "react";
import Dropdown from "../Dropdown/Dropdown"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../config/redux/actions/productActions";

const InputCategory = ({selectedOption}) => {
    const [selected, setSelected] = useState(selectedOption)
    console.log("Selected",selectedOption)
    
    // const dispatch = useDispatch();
    // const options = useSelector(state => state.products.category);

    // console.log("Products", options)

    // useEffect(() => {
    //   dispatch(getCategory())
    // }, [dispatch]);

    const options = ["Sushi", "Ramen", "Dimsum"]
    
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
            value={selected}
            />
        </>
    )

}

export default InputCategory