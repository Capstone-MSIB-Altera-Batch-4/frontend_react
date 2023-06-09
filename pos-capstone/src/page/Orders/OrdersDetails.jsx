import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Printer } from "react-bootstrap-icons";
import { DummyDetails } from "../../data/DummyData";
import "./Orders.style.css"
import { useEffect } from "react";
import { useState } from "react";
import SecondaryButton from "../../element/Button/SecondaryButton/SecondaryButton";
import PrimaryButton from "../../element/Button/PrimaryButton/PrimaryButton"
import PageTitle from "../../element/PageTitle/PageTitle";

const OrdersDetails = () => {
    const data = DummyDetails();
    const { orderid } = useParams()

    const [DataDetails, setDataDetails] = useState()
    const navigate = useNavigate()


    const searchbyid = () => {
        setDataDetails(data.find((datas) => {
            return datas.order_id.includes(`${orderid}`)
        }))
    }

    console.log(DataDetails)

    const totalitem = DataDetails?.Item.map((item) => {
        return item.price
    })

    const totalharga = totalitem?.reduce((acc, curr) => {
        return acc + curr
    })

    console.log(totalharga);

    useEffect(() => {
        searchbyid()
    }, [])

    return (
        <>
            <div className="col mx-3">
                <div className="orders-title mt-2 mb-5">
                    <PageTitle
                        title="Orders & Invoice"
                    />
                </div>
                <div className="row justify-content-between">
                    <div className="col-lg-3">

                        <SecondaryButton
                            className="btn-secondary backtoorder text-danger px-3"
                            onClick={() => navigate("/orders")}
                            label={<><ChevronLeft className="me-3" /> Back To Order List</>}
                        />

                    </div>
                    <div className="col-lg-3 text-end pe-3">
                        <PrimaryButton
                            className="btn print text-white px-3"
                            onClick={() => window.print()}
                            label={<><Printer className="me-3" /> Print Invoices </>}
                        />
                    </div>
                </div>
                <div className="divider mt-5">
                    <h5 className="fw-bold text-center">Order Information</h5>
                </div>
                <div className="orderinfo">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control ps-3"
                        readOnly
                        value={DataDetails ? DataDetails.Name : ''}
                    />
                    <label className="form-label">Table No.</label>
                    <input
                        type="text"
                        className="form-control ps-3"
                        readOnly
                        value={DataDetails ? DataDetails.NoTable : ''}
                    />
                    <div className="row">
                        <div className="col-lg-4">
                            <label className="form-label">Order Date</label>
                            <input
                                type="text"
                                className="form-control ps-3"
                                readOnly
                                value={DataDetails ? DataDetails.date : ''}
                            />
                        </div>
                        <div className="col-lg-4">
                            <label className="form-label">Order ID</label>
                            <input
                                type="text"
                                className="form-control ps-3"
                                readOnly
                                value={DataDetails ? DataDetails.order_id : ''}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <label className="form-label">Type</label>
                            <input
                                type="text"
                                className="form-control ps-3"
                                readOnly
                                value={DataDetails ? DataDetails.type : ''}
                            />
                        </div>
                        <div className="col-lg-4">
                            <label className="form-label">Payment</label>
                            <input
                                type="text"
                                className="form-control ps-3"
                                readOnly
                                value={DataDetails ? DataDetails.payment : ''}
                            />
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table class="table table-item mt-4 w-100">
                            <thead>
                                <tr className="tableitem">
                                    <th className="col-10" scope="col">Item Descriptions</th>
                                    <th className="col" scope="col">Qty</th>
                                    <th className="col" scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {DataDetails?.Item.map((item, idx) =>
                                    <tr className="tableitem" key={idx}>
                                        <td scope="col">{item.itemName}</td>
                                        <td scope="col">{item.quantity}</td>
                                        <td scope="col">{item.price}</td>
                                    </tr>
                                )}
                                <tr className="SubTotal">
                                    <div className="row justify-content-end">
                                        <td className="col-6">Sub Total</td>
                                    </div>
                                    <td></td>
                                    <td className="col ">{totalharga}</td>
                                </tr>
                                <tr className="ServiceCharge">
                                    <div className="row justify-content-end">
                                        <td className="col-6">Service Charge</td>
                                    </div>
                                    <td></td>
                                    <td className="col ">{totalitem?.length * 3000}</td>
                                </tr>
                                <tr className="GrandTotal">
                                    <div className="row justify-content-end">
                                        <td className="col-6">GrandTotal</td>
                                    </div>
                                    <td ></td>
                                    <td className="col ">{totalharga + totalitem?.length * 3000}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )

}

export default OrdersDetails