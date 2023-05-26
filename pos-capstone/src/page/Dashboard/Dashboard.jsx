import React from 'react'
import './Dashboard.style.css'
import CustomerRanking from '../../component/CustomerRanking/RangkingList'
import Sidebar from "../../component/Sidebar/Sidebar";
import Table from "../../component/Table/Table";
import {DummyData} from "../../data/DummyData"

const Dashboard = () => {
  return (
    <div className='dashboad-page'>
        <Sidebar
            activedashboard= "active"
        />
      <CustomerRanking />
      <div>
        <h5 style={{fontFamily:"rubik"}}>Top Selling Product</h5>
        <Table data={DummyData} headerColor="#F46161" headerFontColor="#F3F3F3"/>
      </div>
    </div>
    
  )

}

export default Dashboard
