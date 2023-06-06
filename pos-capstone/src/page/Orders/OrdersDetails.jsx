import React from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, Printer } from "react-bootstrap-icons";
import { DummyDetails } from "../../data/DummyData";
import "./Orders.style.css"
import { useEffect } from "react";
import { useState } from "react";

const OrdersDetails = () => {
    const data = DummyDetails();
    const { orderid } = useParams()

    const [DataDetails, setDataDetails] = useState()


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
                <div className="orders-title mb-5">
                    <h1 className="fw-bold">Orders & Invoice</h1>
                </div>
                <div className="row justify-content-between">
                    <div className="col-4">
                        <button className="btn-secondary backtoorder text-danger px-3">
                            <ChevronLeft />
                            <Link
                                to={`/orders`}
                                className="text-decoration-none text-danger ps-1"
                            >

                                Back To Order List
                            </Link>

                        </button>
                    </div>
                    <div className="col-2 text-end">
                        <button className="btn print text-white px-3">
                            <Printer />
                            <Link
                                className="text-decoration-none text-white ps-2"
                                onClick={() => window.print()}
                            >

                                Print Invoices
                            </Link>
                        </button>
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
                        <div className="col-2">
                            <label className="form-label">Order Date</label>
                            <input
                                type="text"
                                className="form-control ps-3"
                                readOnly
                                value={DataDetails ? DataDetails.date : ''}
                            />
                        </div>
                        <div className="col-2">
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
                        <div className="col-2">
                            <label className="form-label">Type</label>
                            <input
                                type="text"
                                className="form-control ps-3"
                                readOnly
                                value={DataDetails ? DataDetails.type : ''}
                            />
                        </div>
                        <div className="col-2">
                            <label className="form-label">Payment</label>
                            <input
                                type="text"
                                className="form-control ps-3"
                                readOnly
                                value={DataDetails ? DataDetails.payment : ''}
                            />
                        </div>

                    </div>
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
                                <td colSpan={2} className="col"><span>Sub Total :</span></td>
                                <td className="col ">{totalharga}</td>
                            </tr>
                            <tr className="ServiceCharge">
                                <td colSpan={2} className="col"><span>Service Charge :</span></td>
                                <td className="col ">{totalitem?.length * 3000}</td>
                            </tr>
                            <tr className="GrandTotal">
                                <td colSpan={2} className="col"><span>GrandTotal :</span></td>
                                <td className="col ">{totalharga + totalitem?.length * 3000}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="tabletotal table-item w-100">



                    </div>
                </div>
            </div>
        </>
    )

}

export default OrdersDetails