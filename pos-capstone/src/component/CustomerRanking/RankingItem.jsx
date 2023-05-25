import React from 'react'
import { PersonCircle } from 'react-bootstrap-icons'
import RankingLabel from '../../element/RankingLabel/RankingLabel'
import './Styles/CustomerRanking.css'

const RankingItem = ({point, name}) => {
  const getLabel = () => {
    if (point <= 1000) {
       return "bronze"
    }else if (point >= 1001 && point <= 1999) {
        return "silver"
    } else {
        return "gold"
    }
  }
  return (
    <div className='rank-item d-flex gap-4 ms-5 text-left'>
      <div className='d-flex gap-3 py-auto'>
        <PersonCircle className='person-icon'/>
        <p>{name}</p>
      </div>
      <RankingLabel variant={getLabel()} />
      <p>{point}</p>
    </div>
  )
}

export default RankingItem