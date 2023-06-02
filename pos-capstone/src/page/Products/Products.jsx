import PageTitle from "../../element/PageTitle/PageTitle"
import PrimaryButton from "../../element/Button/PrimaryButton/PrimaryButton"
import SecondaryButton from "../../element/Button/SecondaryButton/SecondaryButton"
import { Plus } from "react-bootstrap-icons"
import filterIcon from '../../assets/icon/Filter.svg'
import FilterForm from "../../component/FilterForm/FilterForm"
import TableEditDelete from "../../component/Table/TableEditDelete"
import { productHeader } from "../../data/HeaderTableData"
import { productsData } from "../../data/DummyData"
import { Link } from "react-router-dom"

const Products = () => {

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
                onClick={""}
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
            />
          </div>
        </div>
      </div>
    );
}

export default Products