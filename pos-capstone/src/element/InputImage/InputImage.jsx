import React from "react";
import Button from "../Button/Button";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./InputImage.style.css"
import { useState } from "react";


const InputImage = (props) => {
    const [files, setFiles] = useState()
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
        setFiles(acceptedFiles)
        console.log(files)
    }, [])
    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({ onDrop, noClick: true })
    return (
        <div id="inputimage">
            <label htmlFor={props.htmlFor} className="form-label">
                {props.label}
            </label>
            <div className="imgdrop-wrap ">
                {files ?
                    (<div className="filename">
                        <p>{files[0].name}</p>
                    </div>) :
                    (<div className="container-fluid text-center">
                        <div {...getRootProps({ className: "container-fluid" })}>
                            <input {...getInputProps()} />
                            <div className="imgdrop text-center">
                                <img
                                    className="dropicon"
                                    src="../../../src/assets/icon/dropimg-icon.svg"
                                    height={35} width={35}
                                >
                                </img>
                            </div>
                            {isDragActive ? (
                                <div className="droptext text-center">
                                    <p className="fs-5 pt-3">
                                        <strong>Drop to upload</strong>
                                    </p>
                                    <p className="fw-bold fs-6">Max. File Size: 30MB</p>
                                </div>
                            ) : (
                                <div className="droptext text-center">
                                    <p className="fs-5 pt-3">
                                        <strong>Click to upload</strong> or drag and drop
                                    </p>
                                    <p className="fw-bold fs-6">Max. File Size: 30MB</p>
                                </div>
                            )}
                        </div>
                        <Button
                            className="btn btn-danger p-2 px-5 my-3"
                            btnName="Browse File"
                            onClick={open}
                        />
                    </div>)}
            </div>
        </div>
    )

}

export default InputImage