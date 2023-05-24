import React from 'react'
import RankingLabel from '../../element/RankingLabel/RankingLabel'

const RankingItem = ({point, name}) => {
  let number = 0;
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
    <div className='d-flex gap-4'>
      <p>{number += 1}.</p>
      <div className='d-flex gap-2'>
        <p>{name}</p>
      </div>
      <RankingLabel variant={getLabel()} />
      <p>{point}</p>
    </div>
  )
}

export default RankingItem