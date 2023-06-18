import TabelDetails from "../../component/Table/TableShowDetails";
import InputDate from "../../element/InputDate/InputDate";
import "./Orders.style.css"
import PageTitle from "../../element/PageTitle/PageTitle";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { readOrders } from "../../config/redux/actions/ordersAction";
import { filterorder, formatedDate } from "./OrdersFilter";

const Orders = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.orders.loading)
  const data = useSelector(state => state.orders.items.data)
  const [inputfilter, setInputfilter] = useState({
    inputid: "",
    datefrom: "",
    dateto: "",
  })

  const [Datas, setDatas] = useState()
  const [filterdata, setFilterdata] = useState()

  useEffect(() => {
    dispatch(readOrders())
  }, [])

  useEffect(() => {
    if(data)
    {setDatas(formatedDate(data))
    setFilterdata(formatedDate(data))}
  }, [data])

  useEffect(() => {
    let result = filterdata
    result = filterorder(result, inputfilter)
    setDatas(result)
  }, [inputfilter])

  return (
    <div className="orderspage overflow-hidden pb-4 px-3">
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
              onChange={(e) => setInputfilter({ ...inputfilter, inputid: e.target.value })}
            />
          </div>
        </div>
        <div className="filterbydate col-lg-4 me-3">
          <div className="row ">
            <div className="datefrom col-lg-6">
              <InputDate
                label="from"
                className="form-control"
                onChange={(e) => setInputfilter({ ...inputfilter, datefrom: e.target.value })}
              />
            </div>
            <div className="dateto col-lg-6">
              <InputDate
                label="to"
                className="form-control"
                onChange={(e) => setInputfilter({ ...inputfilter, dateto: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive default-orders overflow-hidden">
        <TabelDetails
          data={Datas?Datas:[]}
        />

      </div>
    </div>
  );
};

export default Orders;