import React from "react";
import Dropdown from "../Dropdown/Dropdown"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, selectedCategory } from "../../config/redux/actions/productActions";

const InputCategory = ({selectedOption}) => {
    const [selected, setSelected] = useState("")
    
    const dispatch = useDispatch();
    const options = useSelector(state => state.products.category.data);

    // console.log("Products", options)

    useEffect(() => {
      dispatch(getCategory())
      console.log("data diget")
    }, [dispatch]);

    useEffect(() => {
        if (selectedOption) {
            const existCategory = options?.filter((option) => {
                return option.name === selectedOption
            })
            console.log(existCategory[0].name)
            setSelected(existCategory[0].name)
        }
    }, [])

    useEffect(() => {
        const categoryFix = options?.filter((option) => {
            return option.name === selected
        })
        console.log("categy ini...", categoryFix)
        dispatch(selectedCategory(categoryFix));
    }, [selected])

    // const options = ["Sushi", "Ramen", "Dimsum"]
    
    return (
        <>
            <Dropdown 
                label = "Category"
                id="category"
                name="category"
                className="dropdown"
                placeholder = {selected?selected:`Select a Category`}
                options= {options?.map((item, idx) =>
                    <li key={idx} id={options[idx].id}>
                        <a
                            className={(selected && options[idx]==selected)
                                ?'dropdown-item active'
                                :'dropdown-item'}
                            onClick={()=>setSelected(options[idx].name)}
                        >
                            {item.name}
                        </a>
                    </li>
                )}
            value={selected}
            />
        </>
    )

}

export default InputCategory