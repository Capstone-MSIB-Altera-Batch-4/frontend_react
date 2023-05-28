import { Outlet } from "react-router-dom"
import Sidebar from "../component/Sidebar/Sidebar"

const PrivateRoute = () => {
    return (
        <>
            <div className="container-fluid row">
            <Sidebar />
                <div className='col'>
                    <div className='row container-fluid mx-auto'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivateRoute

//setting routers

// let isLoggin

    // // get token dari local storage
    // const userString = sessionStorage.getItem("user");
    // const user = JSON.parse(userString);

    // // check token dari local storage
    // user?.usertoken ? isLoggin = true : isLoggin = false;

    // if (!isLoggin) {
    //     return <Navigate to={'/'} replace />
    // } else {}