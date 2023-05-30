import React from "react";
import "./PageTitle.css"

const PageTitle = ({title}) => {
    return (
        <div className="page-title">
        <div className="text-info-text-start">
            <h1 className="text-title">{title}</h1>
        </div>
        </div>

);
};

export default PageTitle;
