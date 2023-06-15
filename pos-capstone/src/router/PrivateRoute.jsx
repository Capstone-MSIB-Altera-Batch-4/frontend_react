import { Navigate, Outlet } from "react-router-dom"
import Sidebar from "../component/Sidebar/Sidebar"
import "./PrivateRoute.style.css"

const PrivateRoute = () => {
    let isLoggin
    const token = sessionStorage.getItem("token");
    token ? isLoggin = true : isLoggin = false;

    if (!isLoggin) {
        return <Navigate to={'/login'} replace />
    } else {
        return (
            <>
                <div className="container-fluid ">
                    <div className=" row min-vh-100">
                        <Sidebar />
                        <div className="content col-lg-10 p-0">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PrivateRoute
