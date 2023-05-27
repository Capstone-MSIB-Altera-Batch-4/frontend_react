import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.style.css"

const Sidebar = (props) => {

    return (
            
                <div className="sidebar bar col auto col-md-2 min-vh-100">
                    <div className="text-center py-1 ">
                        <img
                            className="logo-sidebar p-3"
                            src="../../src/assets/icon/logo-sidebar.png"
                            width={150} height={150}
                        />
                    </div>
                    <ul className="nav flex-column">
                        <li className="nav-item py-3">
                            <a href="/Dashboard" className={`nav-link ${props.activedashboard}`}>
                                <img
                                    className="icon mb-1 ms-1"
                                    src={props.activedashboard ?
                                        "../../src/assets/icon/logo-dashboard.svg" :
                                        "../../src/assets/icon/icon-black/logo-dashboard.svg"}
                                />
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <p className="pt-3">MANAGEMENT</p>
                        <li className="nav-item pb-2">
                            <a href="/Product" className={`nav-link ${props.activeproducts}`}>
                                <img
                                    className="icon mb-1 ms-1"
                                    src={props.activeproducts ?
                                        "../../src/assets/icon/logo-dashboard.svg" :
                                        "../../src/assets/icon/icon-black/logo-products.svg"}
                                />
                                <span className="ms-3">Products</span>
                                        
                            </a>
                        </li>
                        <li className="nav-item pb-2">
                            <a href="" className={`nav-link ${props.activemember}`}>
                                <img
                                    className="icon mb-1 ms-1"
                                    src={props.activemember ?
                                        "../../src/assets/icon/logo-dashboard.svg" :
                                        "../../src/assets/icon/icon-black/logo-member.svg"}
                                />
                                <span className="ms-3">Memberships</span>
                            </a>
                        </li>
                        <li className="nav-item pb-2">
                            <a href="" className={`nav-link ${props.activeorder}`}>
                                <img
                                    className="icon mb-1 ms-1"
                                    src={props.activeorder ?
                                        "../../src/assets/icon/logo-dashboard.svg" :
                                        "../../src/assets/icon/icon-black/logo-order.svg"}
                                />
                                <span className="ms-3">Orders</span>
                            </a>
                        </li>
                        <li className="nav-item pb-2">
                            <a href="" className={`nav-link ${props.activeinvoices}`}>
                                <img
                                    className="icon mb-1 ms-1"
                                    src={props.activeinvoices ?
                                        "../../src/assets/icon/logo-dashboard.svg" :
                                        "../../src/assets/icon/icon-black/logo-invoices.svg"}
                                />
                                <span className="ms-3">Invoices</span>
                            </a>
                        </li>
                        <li className="nav-item pb-2">
                            <a href="" className={`nav-link ${props.activecashier}`}>
                                <img
                                    className="icon mb-1 ms-1"
                                    src={props.activeinvoices ?
                                        "../../src/assets/icon/logo-dashboard.svg" :
                                        "../../src/assets/icon/icon-black/logo-cashier.svg"}
                                />
                                <span className="ms-3">Cashier</span>
                            </a>
                        </li>
                        <hr />
                        <li className="nav-item pb-2">
                            <a href="" className={`nav-link ${props.activecashier}`}>
                                <img
                                    className="icon mb-1 ms-1"
                                    src={props.activeinvoices ?
                                        "../../src/assets/icon/logo-dashboard.svg" :
                                        "../../src/assets/icon/icon-black/logo-help.svg"}
                                />
                                <span className="ms-3">Help</span>
                            </a>
                        </li><li className="nav-item pb-2">
                            <a href="" className={`nav-link ${props.activecashier}`}>
                                <img
                                    className="icon mb-1 ms-1"
                                    src={props.activeinvoices ?
                                        "../../src/assets/icon/logo-dashboard.svg" :
                                        "../../src/assets/icon/icon-black/logo-logout.svg"}
                                />
                                <span className="ms-3">Logout</span>
                            </a>
                        </li>
                        <p className="branch mt-5">
                            Branch Location:
                            <br/>
                            Jl. Asia Afrika No.19, RT.1/RW.3, Gelora, 
                            Kecamatan Tanah Abang, Kota Jakarta Pusat, 
                            Daerah Khusus Ibukota Jakarta 10270
                        </p>
                    </ul>
                </div>
    )


}

export default Sidebar