import React from 'react'
import './Dashboard.style.css'
import CustomerRanking from '../../component/CustomerRanking/RangkingList'

const Dashboard = () => {
  return (
    <div className='dashboad-page'>
      <CustomerRanking />
    </div>
  )
}

export default Dashboard