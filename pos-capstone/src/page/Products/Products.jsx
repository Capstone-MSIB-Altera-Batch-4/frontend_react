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
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../config/redux/actions/productActions"
import TablePagination from "../../element/TablePagination/TablePagination"

const Products = () => {
    const dispatch = useDispatch();
    const productsData = useSelector(state => state.products.products.data);
    const filteredProducts = useSelector(state => state.filterData.products);
    const [products, setProducts] = useState(productsData);

    const pagination = useSelector(state => state.products.products.pagination);
    console.log("pagination", pagination)

    console.log("Products", productsData)

    useEffect(() => {
      dispatch(getProducts())
    }, [dispatch]);

    const [showSnackbar, setShowSnackbar] = useState(false);
    const [onShow, setOnShow] = useState(false);
    const [totalPage, setTotalPage] = useState(5)
    const [curPage, setCurPage] = useState(1)
    const [totalItems, setTotalItems] = useState(50)
    const [limit, setLimit] = useState(10)

    // let filterData = JSON.parse(localStorage.getItem('product'));
    // console.log("Products", filterData);

    // set value pagination
    useEffect(() => {
      if (pagination) {
        setTotalPage(pagination.total_pages);
        setCurPage(pagination.page);
        setTotalItems(pagination.total_items);
        setLimit(pagination.limit);
      }
    }, [pagination]);   
    
    //pagination function
    const handlePrevPage = () => {
      if (curPage > 1) {
        setCurPage((prevPage) => prevPage - 1);
      }
    };

    const handleNextPage = () => {
      if (curPage < totalPage) {
        setCurPage((prevPage) => prevPage + 1);
      }
    };

    const handleRowsPerPageChange = (event) => {
      const newLimit = parseInt(event.target.value);
      setLimit(newLimit);
    };

    const state = useLocation();

    // console.log("State", state);
    useEffect(() => {
      if (state.state !== null && state.state.showSnackbar === true) {
        setShowSnackbar(true);
      }
      // setShowSnackbar(false)
    }, [showSnackbar]);

    
  // if (showSnackbar) {
  //   setTimeout(() => {
  //     setShowSnackbar(false);
  //   }, 1000);
  // }

    // show data 
    // useEffect(() => {
    //   setProducts(filteredProducts)
    // }, [dispatch])

    // useEffect(() => {
    //   setProducts(filteredProducts)
    // }, [dispatch])

    return (
      <div className="product-page row mx-auto px-4">
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
              options={["Sushi", "Ramen", "React", "Makanan 1"]}
              dropdownLabel="Category"
            />
          </div>
          <div className="mt-4">
            <TableEdit
              columns={productHeader}
              // data={products}
              data={productsData}
              editPageLink={"editproduct"}
              deleteConfirmFor={"Product"}
            />
            {/* {products ? (
              "" ): (<td>Product item not found</td>)} */}
          </div>
          <TablePagination
            currentPage={curPage}
            pageCount={totalPage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            prevDisable={curPage === 1}
            nextDisable={curPage === totalPage}
            handleRowsPerPageChange={handleRowsPerPageChange}
            rowsPerPage={limit}
          />
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