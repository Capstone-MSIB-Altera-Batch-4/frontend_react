import React from "react";
import Button from "../Button/Button";
import "./InputImage.style.css"


const InputImage = () => {

    return (
        <>
            <div className="imgdrop-wrap ">
                <div className="imgdrop">
                    <div>
                        <img
                            className="dropicon"
                            src="../../../src/assets/icon/dropimg-icon.svg"
                            height={35} width={35}
                            >
                        </img>
                    </div>
                    <div className="droptext text-center">
                        <p className="fs-5 pt-3">
                            <strong>Click to upload</strong> or drag and drop
                        </p>
                        <p className="fw-bold fs-6">Max. File Size: 30MB</p>
                    </div>
                    <input type="file" hidden id="fileSelectorInput"></input>
                    <Button
                        className="btn btn-danger p-2 px-5 my-3"
                        btnName="Browse File"
                    />
                </div>
                <div className="filename"></div>
            </div>
        </>
    )

}

export default InputImage