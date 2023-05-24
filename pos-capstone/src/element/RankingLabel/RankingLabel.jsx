import React from 'react'
import './RankingLabel.css'

const RankingLabel = ({variant}) => {
  //untuk custom warna background dan warna text label
  const getColor = () => {
    switch (variant) {
      case "gold":
        return "gold-style";
      case "silver":
        return "silver-style";
      case "bronze":
        return "bronze-style";
      default:
        return "";
    }
  }

  //untuk mendapatkan label: gold, silver, atau bronze
  const getTextLabel = () => {
    switch (variant) {
        case "gold":
          return "Gold";
        case "silver":
          return "Silver";
        case "bronze":
          return "Bronze";
        default:
          return "Bronzee";
      }
  }
  
  return (
    <div className={`label-style ${getColor()}`}>
      {getTextLabel()}
    </div>
  )
}

export default RankingLabel