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
import { getProducts, getCategory } from "../../config/redux/actions/productActions"
import TablePagination from "../../element/TablePagination/TablePagination"
import Loader from "../../element/Loader/Loader"

const Products = () => {
    const dispatch = useDispatch();
    const productsData = useSelector(state => state.products.products.data);
    const filteredProducts = useSelector(state => state.filterData.products);
    const loading = useSelector(state => state.products.loading)
    const pagination = useSelector(state => state.products.products.pagination);

    //option filter pake ini
    const options = useSelector(state => state.products.category.data);

    // console.log("Options", options)

    const [showSnackbar, setShowSnackbar] = useState(false);
    const [onShow, setOnShow] = useState(false);
    const [totalPage, setTotalPage] = useState(5)
    const [curPage, setCurPage] = useState(1)
    const [totalItems, setTotalItems] = useState(50)
    const [limit, setLimit] = useState(10)
    const [numbTable, setNumbTable] = useState(1)


    //get products
    useEffect(() => {
      dispatch(getProducts(curPage, limit))
      dispatch(getCategory())

      if (curPage > 2) {
        const numbtable =  1 + (limit * (curPage - 1)) 
        setNumbTable(numbtable)
      } else if (curPage == 1) {
        setNumbTable(1)
      }  else if (curPage == 2) {
        setNumbTable(limit + 1)
      }

    }, [dispatch, curPage, limit]);

    // //get category 
    // useEffect(() => {
      
    // }, [dispatch]);
    
    console.log("pagination", pagination)
    
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
  
    return (
      <>
      {loading ? 
        <Loader 
          secondaryColor="#B1464A"
          color="#FFF0DE"
        />
        : <div className="product-page row mx-auto px-4">
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
              numbering={numbTable}
              // data={products}
              loading={loading}
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
      }</>
    );
}

export default Products;