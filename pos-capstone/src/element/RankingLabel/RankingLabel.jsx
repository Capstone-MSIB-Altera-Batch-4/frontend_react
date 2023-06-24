import React from 'react'
import './RankingLabel.css'

const RankingLabel = ({ variant }) => {
  //untuk custom warna background dan warna text label
  const getColor = () => {
    switch (variant.toLowerCase()) {
      case ("gold"):
        return "gold-style";
      case ("silver"):
        return "silver-style";
      case "bronze":
        return "bronze-style";
      default:
        return "";
    }
  }

  return (
    <p className={`label-style ${getColor()}`}>
      {variant.charAt(0).toUpperCase()+variant.slice(1)}
    </p>
  )
}

export default RankingLabel