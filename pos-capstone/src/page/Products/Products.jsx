import { useState, useRef, useEffect } from "react"
import PageTitle from "../../element/PageTitle/PageTitle"
import PrimaryButton from "../../element/Button/PrimaryButton/PrimaryButton"
import SecondaryButton from "../../element/Button/SecondaryButton/SecondaryButton"
import { Plus } from "react-bootstrap-icons"
import filterIcon from '../../assets/icon/Filter.svg'
import FilterForm from "../../component/FilterForm/FilterForm"
import TableEdit from "../../component/Table/TableEditDelete"
import { productHeader } from "../../data/HeaderTableData"
import { productsData } from "../../data/DummyData"
import { Link, useLocation } from "react-router-dom"
import Snackbar from "../../element/Snackbar/Snackbar"

const Products = () => {
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [onShow, setOnShow] = useState(false)
    const [products, setProducts] = useState(productsData)

    let filterData = JSON.parse(localStorage.getItem('product'));
    // console.log("Products", filterData);


    const state = useLocation();

    // console.log("State", state);
    useEffect(() => {
      if (state.state !== null && state.state.showSnackbar === true) {
        setShowSnackbar(true);
      }
    }, [showSnackbar]);

    // show data 
    useEffect(() => {
      setProducts(filterData)
    }, [filterData])

    return (
      <div className="product-page container container-fluid row mx-auto">
        <div className="col">
          <div className="my-5">
            <PageTitle title="Product" />
          </div>
          <div className="d-flex justify-content-between mx-auto">
            <Link to={"/products/addproduct"}>
              <PrimaryButton
                type="button"
                className="d-flex gap-2 align-items-center add-product-button"
                label={
                  <>
                    <Plus color="white" size={"24px"} />
                    <span className="align-items-center fw-medium">
                      Add Product
                    </span>
                  </>
                }
              />
            </Link>
            <SecondaryButton
              type="button"
              databstoggle="collapse"
              databstarget="#filter"
              label={<img src={filterIcon} />}
              onClick={() => setOnShow(!onShow)}
            />
          </div>
          <div className="collapse" id="filter">
            <FilterForm
              data={productsData}
              onShow={onShow}
              filterFor="product"
              options={["Sushi", "Ramen", "React"]}
            />
          </div>
          <div className="mt-4">
            <TableEdit
              columns={productHeader}
              data={products}
              editPageLink={"editproduct"}
              deleteConfirmFor={"Product"}
            />
            {products ? (
              "" ): (<td>Product item not found</td>)}
          </div>
        </div>

        {/* MODAL & SNACKBAR */}
        <div></div>
        {showSnackbar && state.state !== null ? (
          <Snackbar
            setSnackbar={showSnackbar}
            action={state.state.action}
            variant={state.state.variant}
          />
        ) : (
          ""
        )}
      </div>
    );
}

export default Products;