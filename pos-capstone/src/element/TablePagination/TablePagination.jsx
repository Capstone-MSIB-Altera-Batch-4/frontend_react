import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

const TablePagination = (props) => {
    
    return (
        <div className="row px-0 mt-5 justify-content-between mb-5">
            <div className="col-md-6 w-25">
                <div className="d-flex justify-content-start">
                    <label htmlFor="rowsPerPageSelect">Show</label>
                    <span className="number-wrapper">
                        <input
                            className="mx-3 input-pagination"
                            type="number"
                            id="rowsPerPageSelect"
                            min="1"
                            max="100"
                            value={props.rowsPerPage}
                            style={{
                                borderColor: "red",
                                borderRadius: "5px",
                                color: "red",
                                outline: "none",
                            }}
                            onChange={props.handleRowsPerPageChange}
                        />
                    </span>
                    <label>Data</label>
                </div>
            </div>
            <div className="col-md-6 w-25">
                <div className="d-flex justify-content-end">
                    <button
                        onClick={props.handlePrevPage}
                        disabled={props.prevDisable}
                        style={{ border: "none", background: "none" }}
                    >
                        <ArrowLeft />
                    </button>
                    <span className="mx-2" style={{ fontWeight: "bold" }}>
                        {props.currentPage}
                    </span>
                    <button
                        onClick={props.handleNextPage}
                        disabled={props.nextDisable}
                        style={{ border: "none", background: "none" }}
                    >
                        <ArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TablePagination;