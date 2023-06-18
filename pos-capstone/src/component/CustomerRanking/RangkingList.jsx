import React from 'react'
import RankingItem from './RankingItem'
import './Styles/CustomerRanking.css'
import { customerData } from '../../data/dashboardDummyData'
import { fetchMembers } from "../../config/redux/actions/memberActions"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


const CustomerRanking = () => {
  let number = 0;
  
  const dispatch = useDispatch();
  const members = useSelector(state => state.members.members.data);

  let sortedData = members?.sort((cust1, cust2) => (cust2.point - cust1.point));

  useEffect(()=>{
    dispatch(fetchMembers(1,9999))
  },[])
  
  return (
    <div className='customer-ranking'>
      <h4 className='title mt-2'>Customer Ranking</h4>
      <div className='ranking-list'>
        {sortedData?.slice(0, 10).map((customer) => {
          return (
            <div className='d-flex'>
              <p className='max-w-fit number'>{number += 1}.</p>
              <RankingItem
                point={customer.point}
                name={customer.name}
                label={customer.level}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CustomerRanking