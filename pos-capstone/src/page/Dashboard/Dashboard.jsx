import React from 'react'
import './Dashboard.style.css'
import CustomerRanking from '../../component/CustomerRanking/RangkingList'
import Sidebar from "../../component/Sidebar/Sidebar";
import Table from "../../component/Table/Table";
import { DummyData } from "../../data/DummyData"
import Graph from '../../element/Graph/Graph';

const Dashboard = () => {
  return (
    <div className='dashboad-page row container-fluid'>
      <Sidebar
        activedashboard="active"
      />
      <div className='col'>
        <div className='row'>
          <div className='col'>
            <h1>leoni</h1>
            <Graph />
          </div>
          <div className='col'>
            <CustomerRanking />
          </div>
          <div className='row'>
            <div className='col'>
              <h5 style={{ fontFamily: "rubik" }}>Top Selling Product</h5>
              <Table data={DummyData} headerColor="#F46161" headerFontColor="#F3F3F3" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default Dashboard
