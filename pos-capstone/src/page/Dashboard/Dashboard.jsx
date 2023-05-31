
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

      <div className='col dashboard-page'>
         <div className='row container-fluid mx-auto p-4'>
        <div className='py-4 text-header'>
              <h4>Sup, Admin.. good to see you, Mate!</h4>
              <p>Here are the whole data of your <span className='fw-bold'>RollMe Sushi Restaurant</span></p>
            </div>
            <div className='row'>
          <div className='col-md-7 col-lg-8'>
            <div className='row mb-4'>
              <div className='col-md-4'>
                <DashboardCard title="Total Sales" amount="Rp61.500.000" growth={"+7%"} icon={<CreditCard/>} className="col-md-2"/>
              </div>
              <div className='col-md-4'>
                <DashboardCard title="Visitors" amount="245" growth={"+3%"} icon={<CreditCard/>} className="col-md-2"/>
              </div>
              <div className='col-md-4'>
                <DashboardCard title="New Member" amount="65" growth={"+3"} icon={<Person />} className="col-md-2"/>
              </div>
            </div>
            <div className='graph-element p-3 items-center w-100'>
              <Graph />
            </div>
          </div>
          <div className='col-md-3 col-lg-4'>
            <CustomerRanking />
          </div>
          </div>
          <div className='row'>
            <div className='col'>
              <h5 style={{ fontFamily: "rubik", marginTop: "3%", marginBottom: "2%" }}>Top Selling Product</h5>
              <Table data={DummyData} headerColor="#FDDFDF" headerFontColor="black" />
            </div>
          </div>
        </div>
      </div>

  )

}

export default Dashboard