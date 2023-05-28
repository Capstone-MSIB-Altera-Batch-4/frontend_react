
import './Dashboard.style.css'
import CustomerRanking from '../../component/CustomerRanking/RangkingList'
import Sidebar from "../../component/Sidebar/Sidebar";
import Table from "../../component/Table/Table";
import { DummyData } from "../../data/DummyData"
import Graph from '../../element/Graph/Graph';
import DashboardCard from '../../component/Cards/DashboardCard/DashboardCard';
import { CreditCard, Person } from 'react-bootstrap-icons';

const Dashboard = () => {
  return (
    <div className='dashboard-page'>
      <div className='col'>
        <div className='row container-fluid mx-auto'>
        <div className='py-4 text-header'>
              <h4>Sup, Admin.. good to see you, Mate!</h4>
              <p>Here are the whole data of your <span className='fw-bold'>RollMe Sushi Restaurant</span></p>
            </div>
          <div className='col-md-8 container-fluid mx-1'>
            <div className='row gap-3 mb-3'>
              <DashboardCard title="Total Sales" amount="Rp61.500.000" growth={"+7%"} icon={<CreditCard/>} />
              <DashboardCard title="Visitors" amount="245" growth={"+3%"} icon={<CreditCard/>} />
              <DashboardCard title="New Member" amount="65" growth={"+3"} icon={<Person />} />
            </div>
            <div className='graph-element p-4 items-center'>
              <Graph />
            </div>
          </div>
          <div className='col-md-2'>
            <CustomerRanking />
          </div>
          <div className='row'>
            <div className='col'>
              <h5 style={{ fontFamily: "rubik", marginTop: "3%" }}>Top Selling Product</h5>
              <Table data={DummyData} headerColor="#F46161" headerFontColor="#F3F3F3" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default Dashboard
