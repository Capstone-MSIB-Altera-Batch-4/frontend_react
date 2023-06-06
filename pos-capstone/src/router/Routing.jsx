import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "../page/Login/Login"
import Landing from "../page/Landing/Landing"
import Dashboard from "../page/Dashboard/Dashboard"
import Products from "../page/Products/Products"
import AddProduct from "../page/Products/AddProduct"
import PrivateRoute from "./PrivateRoute"
import Preview from "../page/Preview/Preview"
import EditProduct from "../page/Products/EditProduct"
import Orders from "../page/Orders/Orders"
import Cashier from "../page/Cashier/Cashier"
import AddCashier from "../page/Cashier/AddCashier"
import EditCashier from "../page/Cashier/EditCashier"
import OrdersDetails from "../page/Orders/OrdersDetails"


const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Landing />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/products/addproduct" element={<AddProduct/>} />
                    <Route path="/products/editproduct/:id" element={<EditProduct/>} />
                    <Route path="/orders" element={<Orders/>} />
                    <Route path="/orders/detailorder/:orderid" element={<OrdersDetails/>} />
                    <Route path="/cashier" element={<Cashier/>} />
                    <Route path="/cashier/addemployee" element={<AddCashier/>} />
                    <Route path="/cashier/editemployee/:id" element={<EditCashier/>} />               
                </Route>
                <Route path="/preview" element={<Preview />} />
            </Routes>
        </Router>
    )
}
export default Routing