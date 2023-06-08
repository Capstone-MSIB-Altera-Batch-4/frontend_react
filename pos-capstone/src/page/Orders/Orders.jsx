import TabelDetails from "../../component/Table/TableShowDetails";
import InputDate from "../../element/InputDate/InputDate";
import { DummyDetails } from "../../data/DummyData";
import "./Orders.style.css"
import PageTitle from "../../element/PageTitle/PageTitle";
import { useState } from "react";
import { useEffect } from "react";

const Orders = () => {
  const data = DummyDetails();

  const [inputdate, setinputdate] = useState({
    datefrom: "",
    dateto: "",
  })

  const [inputid, setinputid] = useState('')

  const [Datas, setDatas] = useState(data)
  const [filterdata, setFilterdata] = useState(data)



  const filterid = (array) => {
    return array.filter((datas) =>
      datas.order_id.includes(`${inputid}`)
    )
  }
  const filterdatefrom = (array) => {
    return array.filter(datas =>
      datas.date >= (`${inputdate.datefrom}`)
    )
  }
  const filterdateto = (array) => {
    return array.filter(datas =>
      datas.date <= (`${inputdate.dateto}`)
    )
  }

  useEffect(() => {
    let result = filterdata

    if (inputid.length != 0) {
      result = filterid(result)
    }

    if (inputdate.datefrom.length != 0) {
      result = filterdatefrom(result)
    }

    if (inputdate.dateto.length != 0) {
      result = filterdateto(result)
    }
    setDatas(result)

  }, [inputid, inputdate])

  return (
    <div className="orderspage col ps-3">
      <div className="orders-title mt-2 mb-5">
        <PageTitle
          title="Orders & Invoice"
        />
      </div>
      <div className="filtertable mb-3 row justify-content-between">
        <div className="filterbyid col-lg-4 align-self-start">
          <label className="form-label">Orders No:</label>
          <div className="col-lg-8">
            <input
              type="number"
              className="form-control"
              placeholder="Type Order ID"
              onChange={(e) => setinputid(e.target.value)}
            />
          </div>
        </div>
        <div className="filterbydate col-lg-4 me-3">
          <div className="row ">
            <div className="datefrom col-lg-6">
              <InputDate
                label="from"
                className="form-control"
                onChange={(e) => setinputdate({ ...inputdate, datefrom: e.target.value })}
              />
            </div>
            <div className="dateto col-lg-6">
              <InputDate
                label="to"
                className="form-control"
                onChange={(e) => setinputdate({ ...inputdate, dateto: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive default-orders">
        <TabelDetails
          data={Datas}
        />

      </div>
    </div>
  );
};

export default Orders;