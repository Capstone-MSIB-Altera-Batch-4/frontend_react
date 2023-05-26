import React from 'react'
import './DashboardCard.css'

const DashboardCard = ({title, amount, growth, icon}) => {
  return (
    <div className='card-wrap bg-white px-3 py-2'>
      <div className='icon-style'>
        {icon}
      </div>
      <div className='text-info text-start'>
        <p className='text-title'>{title}</p>
        <h4>{amount}</h4>
        {/* //perlu diatur lagi logic tergantung data BE */}
        <p className='amount-growth text-success'>{growth} from last month</p>
      </div>
    </div>
  )
}

export default DashboardCard