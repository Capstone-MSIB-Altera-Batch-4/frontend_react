import React from 'react'
import RankingItem from './RankingItem'
import './Styles/CustomerRanking.css'
import { customerData } from '../../data/dashboardDummyData'

const CustomerRanking = () => {
  let number = 0;
  let sortedData = customerData.sort((cust1, cust2) => (cust2.point - cust1.point));
  return (
    <div className='customer-ranking align-items-start'>
      <h4 className='title mt-2 ms-1'>Customer Ranking</h4>
      <div className='ranking-list'>
        {sortedData?.slice(0, 10).map((customer) => {
          return (
            <div className='d-flex ms-1'>
              <p className='max-w-fit number'>{number += 1}.</p>
              <RankingItem
                point={customer.point}
                name={customer.name}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CustomerRanking