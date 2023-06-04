import TestingTable from "../../component/Table/TestingTable";
import TableEditDelete from "../../data/DummyData";
import InputDate from "../../element/InputDate/InputDate";

const Orders = () => {
  return (
      <div className="default-products col">
        <TestingTable />
        <InputDate
          className="inputdate"
          placeholder="From"
          
        />
      </div>
  );
};

export default Orders;
