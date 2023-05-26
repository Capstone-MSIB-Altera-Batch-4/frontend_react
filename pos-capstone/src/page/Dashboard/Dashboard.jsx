import React from 'react'
import './Dashboard.style.css'
import CustomerRanking from '../../component/CustomerRanking/RangkingList'
import Sidebar from "../../component/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className='dashboad-page'>
        <Sidebar
            activedashboard= "active"
        />
      <CustomerRanking />
    </div>
    
  )

}

export default Dashboard