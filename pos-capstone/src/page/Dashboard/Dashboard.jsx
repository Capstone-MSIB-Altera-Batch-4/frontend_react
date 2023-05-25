import Table from "../../component/Table/Table";
import {DummyData} from "../../data/DummyData"

const Dashboard = () => {
    return (
      <div>
        <h5 style={{fontFamily:"rubik"}}>Top Selling Product</h5>
        <Table data={DummyData} headerColor="#F46161" headerFontColor="#F3F3F3"/>
      </div>
    );
  };
  
  export default Dashboard;