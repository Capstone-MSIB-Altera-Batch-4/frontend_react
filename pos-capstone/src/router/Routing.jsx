import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "../page/Login/Login"
import Landing from "../page/Landing/Landing"
import Dashboard from "../page/Dashboard/Dashboard"
import PrivateRoute from "./PrivateRoute"
import Products from "../page/Product/Products"

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Landing />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/products" element={<Products />} />
                </Route>
            </Routes>
        </Router>
    )
}
export default Routing