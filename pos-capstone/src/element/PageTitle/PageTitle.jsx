import React from "react";
import "./PageTitle.css"

const PageTitle = (props) => {
    return (
        <div className="page-title">
            <h1>{props.title}</h1>
        </div>

);
};

export default PageTitle;
