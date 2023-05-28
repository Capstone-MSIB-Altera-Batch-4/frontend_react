import React from "react";
import { NavLink } from "react-router-dom";
import { dashboard, barItems, help, logout } from "./SidebarItem";
import "./Sidebar.style.css"

const Sidebar = () => {

    return (
        <div className="sidebar bar col auto col-md-2 min-vh-100">
            <div className="text-center mt-3 py-1 ">
                <img
                    className="logo-sidebar p-3"
                    src="../../src/assets/icon/logo-sidebar.png"
                    width={180} height={180}
                />
            </div>
            <ul className="nav flex-column">
                <li>
                    <NavLink to={dashboard.path} className="nav-link mt-3" activeclassName="active" >
                        <div className="icon">{dashboard.icon}</div>
                        <div className="barname">{dashboard.name}</div>
                    </NavLink>
                </li>
                <p className="pt-4">MANAGEMENT</p>
                {barItems.map((item, idx) =>
                    <li key={idx}>
                        <NavLink to={item.path} className="nav-link" activeclassName="active" >
                            <div className="icon">{item.icon}</div>
                            <div className="barname">{item.name}</div>
                        </NavLink>
                    </li>
                )}
                <hr/>
                <li>
                    <NavLink to={help.path} className="nav-link" activeclassName="active" >
                        <div className="icon">{help.icon}</div>
                        <div className="barname">{help.name}</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={help.path} className="nav-link" activeclassName="active" >
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
    )


}

export default Sidebar