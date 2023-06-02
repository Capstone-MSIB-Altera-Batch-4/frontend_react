import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "../page/Login/Login"
import Landing from "../page/Landing/Landing"
import Dashboard from "../page/Dashboard/Dashboard"
import Products from "../page/Products/Products"
import AddProduct from "../page/Products/AddProduct"
import PrivateRoute from "./PrivateRoute"
import Preview from "../page/Preview/Preview"
import EditProduct from "../page/Products/EditProduct"


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
                </Route>
                <Route path="/preview" element={<Preview />} />
            </Routes>
        </Router>
    )
}
export default Routing