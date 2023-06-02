import { useState, useRef } from "react"
import PageTitle from "../../element/PageTitle/PageTitle"
import PrimaryButton from "../../element/Button/PrimaryButton/PrimaryButton"
import SecondaryButton from "../../element/Button/SecondaryButton/SecondaryButton"
import { Plus } from "react-bootstrap-icons"
import filterIcon from '../../assets/icon/Filter.svg'
import FilterForm from "../../component/FilterForm/FilterForm"
import TableEditDelete from "../../component/Table/TableEditDelete"
import { productHeader } from "../../data/HeaderTableData"
import { productsData } from "../../data/DummyData"
import { Link, useLocation } from "react-router-dom"
import ConfirmModal from "../../component/Modal/ConfirmModal/ConfirmModal"
import Snackbar from "../../element/Snackbar/Snackbar"

const Products = () => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const snackbarRef = useRef(null);

    const ActionSuccess = () => {
        setShowConfirmModal(false);
        //setiap action yg perlu snackbar pake ini
        snackbarRef.current.showSnackbar();
    }

    // const { state } =  useLocation();

    // // const ProductNotif = () => {
    //     if (state.showSnackbar === true) {
    //         snackbarRef.current.showSnackbar();
    //     }
    // // }

    // // const { showSnackbar } = state;
    // console.log("state", state)
    // // setShowConfirmModal(`${state.showSnackbar}`)

    return (
      <div className="product-page container container-fluid row col-md-10 mx-auto">
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
            />
          </div>
          <div className="collapse" id="filter">
            <FilterForm data={productsData} />
          </div>
          <div className="mt-4">
            <TableEditDelete
              headerColor="#FDDFDF"
              columns={productHeader}
              data={productsData}
              pageSize={10}
              deteleConfirm={() => setShowConfirmModal(true)}
            />
          </div>
        </div>

        {/* MODAL & SNACKBAR */}
        <div>
        <ConfirmModal
            show={showConfirmModal}
            handleClose={() => setShowConfirmModal(false)}
            confirmFor={"delete"}
            role={"Product"}
            id={123}
            action={() => ActionSuccess()}
        />
        </div>
        <Snackbar ref={snackbarRef} action={"delete"} variant={"success"}/>
      </div>
    );
}

export default Products