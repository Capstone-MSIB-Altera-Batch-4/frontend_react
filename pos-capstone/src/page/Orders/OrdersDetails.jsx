import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Printer } from "react-bootstrap-icons";
import "./Orders.style.css"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import SecondaryButton from "../../element/Button/SecondaryButton/SecondaryButton";
import PrimaryButton from "../../element/Button/PrimaryButton/PrimaryButton"
import PageTitle from "../../element/PageTitle/PageTitle";
import { readOrdersbyid } from "../../config/redux/actions/ordersAction";
import Loader from "../../element/Loader/Loader";


const OrdersDetails = () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.orders.loading)
    const data = useSelector(state => state.orders.itemsbyid.data)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(readOrdersbyid(id))
    }, [])

    return (
        <>
            {loading ?
                <Loader
                    secondaryColor="#B1464A"
                    color="#FFF0DE"
                />
                :
                <div className="mt-5 mx-3">
                    <div className="orders-title mt-2 mb-5">
                        <PageTitle
                            title="Orders & Invoice"
                        />
                    </div>
                    <div className="row btn-order justify-content-between">
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
                            value={data?.name}
                        />
                        <label className="form-label">Table No.</label>
                        <input
                            type="text"
                            className="form-control ps-3"
                            readOnly
                            value={data?.number_table}
                        />
                        <div className="row">
                            <div className="col-lg-4">
                                <label className="form-label">Order Date</label>
                                <input
                                    type="text"
                                    className="form-control ps-3"
                                    readOnly
                                    value={data ? data.created_at : ''}
                                />
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">Order ID</label>
                                <input
                                    type="text"
                                    className="form-control ps-3"
                                    readOnly
                                    value={data ? data.order_id : ''}
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
                                    value={data ? data.order_option : ''}
                                />
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">Payment</label>
                                <input
                                    type="text"
                                    className="form-control ps-3"
                                    readOnly
                                    value={data ? data.payment : ''}
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
                                    {data?.items?.map((item, idx) =>
                                        <tr className="tableitem" key={idx}>
                                            <td scope="col">{item.name}</td>
                                            <td scope="col">{item.quantity}</td>
                                            <td scope="col">{item.price}</td>
                                        </tr>
                                    )}
                                    <tr className="SubTotal">
                                        <div className="row justify-content-end">
                                            <td className="col-6">Sub Total</td>
                                        </div>
                                        <td></td>
                                        <td className="col ">{data?.sub_total}</td>
                                    </tr>
                                    <tr className="ServiceCharge">
                                        <div className="row justify-content-end">
                                            <td className="col-6">Service Charge</td>
                                        </div>
                                        <td></td>
                                        <td className="col ">{data?.service}</td>
                                    </tr>
                                    <tr className="GrandTotal">
                                        <div className="row justify-content-end">
                                            <td className="col-6">GrandTotal</td>
                                        </div>
                                        <td ></td>
                                        <td className="col ">{data?.grand_total}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>}
        </>
    )

}

export default OrdersDetails