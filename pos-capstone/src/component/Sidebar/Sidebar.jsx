import React from "react";
import { NavLink } from "react-router-dom";
import { dashboard, barItems, help, logout } from "./SidebarItem";
import "./Sidebar.style.css"
import { List } from "react-bootstrap-icons";

const Sidebar = () => {

    return (
        <>
            <div className="sidebar bar col auto col-lg-2 min-vh-100">
                <div className="text-center mt-3 py-1 ">
                    <img
                        className="logo-sidebar"
                        src="../../src/assets/icon/logo-sidebar.png"

                    />
                </div>
                <ul className="navitem w-100 ps-0">
                    <li>
                        <NavLink to={dashboard.path} className="nav-link mt-3" activeclassName="active" >
                            <div className="icon">{dashboard.icon}</div>
                            <div className="barname">{dashboard.name}</div>
                        </NavLink>
                    </li>
                    <p className="manage pt-4">MANAGEMENT</p>
                    {barItems.map((item, idx) =>
                        <li key={idx}>
                            <NavLink to={item.path} className="nav-link" activeclassName="active" >
                                <div className="icon">{item.icon}</div>
                                <div className="barname">{item.name}</div>
                            </NavLink>
                        </li>
                    )}
                    <hr />
                    <li>
                        <NavLink to={help.path} className="nav-link" activeclassName="active" >
                            <div className="icon">{help.icon}</div>
                            <div className="barname">{help.name}</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={logout.path} className="nav-link" activeclassName="active" >
                            <div className="icon">{logout.icon}</div>
                            <div className="barname">{logout.name}</div>
                        </NavLink>
                    </li>
                    <p className="branch mt-5">
                        Branch Location:
                        <br />
                        Jl. Asia Afrika No.19, RT.1/RW.3, Gelora,
                        Kecamatan Tanah Abang, Kota Jakarta Pusat,
                        Daerah Khusus Ibukota Jakarta 10270
                    </p>
                </ul>



            </div>
            <div className="menu justify-content-between">
                <button
                    className="button-menu "
                    data-bs-toggle="modal"
                    data-bs-target="#sidebar"
                >
                    <List className="fs-1 ms-1 mt-2" />

                </button>
                
                    <img
                        className="logo-menu text-center mt-2"
                        src="../../src/assets/icon/logo-sidebar.png"

                    />
                
            </div>

            <div className="modal fade" id="sidebar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content vh-100">
                        <div className="modal-header">
                            <img
                                className="logo-sidebar"
                                src="../../src/assets/icon/logo-sidebar.png"

                            />
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="navitem w-100 ps-0">
                                <li>
                                    <NavLink to={dashboard.path} className="nav-link mt-3" activeclassName="active" >
                                        <div className="icon">{dashboard.icon}</div>
                                        <div className="barname">{dashboard.name}</div>
                                    </NavLink>
                                </li>
                                <p className="manage pt-4">MANAGEMENT</p>
                                {barItems.map((item, idx) =>
                                    <li key={idx}>
                                        <NavLink to={item.path} className="nav-link" activeclassName="active" >
                                            <div className="icon">{item.icon}</div>
                                            <div className="barname">{item.name}</div>
                                        </NavLink>
                                    </li>
                                )}
                                <hr />
                                <li>
                                    <NavLink to={help.path} className="nav-link" activeclassName="active" >
                                        <div className="icon">{help.icon}</div>
                                        <div className="barname">{help.name}</div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={logout.path} className="nav-link" activeclassName="active" >
                                        <div className="icon">{logout.icon}</div>
                                        <div className="barname">{logout.name}</div>
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                        <div className="modal-footer">
                            <p className="branch mt-5">
                                Branch Location:
                                <br />
                                Jl. Asia Afrika No.19, RT.1/RW.3, Gelora,
                                Kecamatan Tanah Abang, Kota Jakarta Pusat,
                                Daerah Khusus Ibukota Jakarta 10270
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Sidebar