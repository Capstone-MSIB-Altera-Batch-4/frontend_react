import TabelDetails from "../../component/Table/TableShowDetails";
import InputDate from "../../element/InputDate/InputDate";
import "./Orders.style.css"
import PageTitle from "../../element/PageTitle/PageTitle";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { readOrders, searchOrders } from "../../config/redux/actions/ordersAction";
import { formatedDate } from "./OrdersFilter";
import TablePagination from "../../element/TablePagination/TablePagination";
import Loader from "../../element/Loader/Loader";

const Orders = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.orders.items.data)
  const loading = useSelector(state => state.orders.loading)
  const [inputfilter, setInputfilter] = useState({
    inputid: "",
    datefrom: "",
    dateto: "",
  })

  const pagination = useSelector(state => state.orders.items.pagination);
  const [totalPage, setTotalPage] = useState(5)
  const [curPage, setCurPage] = useState(1)
  const [totalItems, setTotalItems] = useState(50)
  const [limit, setLimit] = useState(10)
  const [numbTable, setNumbTable] = useState(1)

  useEffect(() => {
    dispatch(readOrders(10, 1));
  }, []);

  // search baru pake api
  useEffect(() => {
    dispatch(
      searchOrders(inputfilter.datefrom, inputfilter.dateto, inputfilter.inputid)
    );
  }, [inputfilter])

  useEffect(() => {
    dispatch(readOrders(limit, curPage));
    if (curPage > 2) {
      const numbtable =  1 + (limit * (curPage - 1)) 
      setNumbTable(numbtable)
    } else if (curPage == 1) {
      setNumbTable(1)
    }  else if (curPage == 2) {
      setNumbTable(limit + 1)
    }
  }, [dispatch, curPage, limit]);


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

  
  const [Datas, setDatas] = useState()
  console.log(data)
  const [filterdata, setFilterdata] = useState()

  useEffect(() => {
    if (data) {
      setDatas(formatedDate(data))
      setFilterdata(formatedDate(data))
    } else  {
      setDatas([])
    }
  }, [data])


  return (
    <>
      {loading ?
        <Loader
          secondaryColor="#B1464A"
          color="#FFF0DE"
        />
        : <div className="orderspage overflow-hidden pb-4 px-4 mx-3">
          <div className="orders-title mt-5 mb-5">
            <PageTitle
              title="Orders & Invoice"
            />
          </div>
          <div className="filtertable mb-3 row justify-content-between">
            <div className="filterbyid col-lg-4 align-self-start">
              <label className="form-label">Orders No:</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Order ID"
                  value={inputfilter.inputid}
                  onChange={(e) => setInputfilter({ ...inputfilter, inputid: e.target.value })}
                />
              </div>
            </div>
            <div className="filterbydate col-lg-4">
              <div className="row ">
                <div className="datefrom col-lg-6">
                  <InputDate
                    label="from"
                    className="form-control"
                    value={inputfilter.datefrom}
                    onChange={(e) => setInputfilter({ ...inputfilter, datefrom: e.target.value })}
                  />
                </div>
                <div className="dateto col-lg-6">
                  <InputDate
                    label="to"
                    className="form-control"
                    value={inputfilter.dateto}
                    onChange={(e) => setInputfilter({ ...inputfilter, dateto: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive default-orders overflow-hidden">
            <TabelDetails
              numbering={numbTable}
              data={Datas ? Datas : []}
            />
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
        </div>
      }
    </>

  );
};

export default Orders;