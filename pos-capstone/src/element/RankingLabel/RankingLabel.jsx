import React from 'react'
import './RankingLabel.css'

const RankingLabel = ({variant}) => {
  //untuk custom warna background dan warna text label
  const getColor = () => {
    switch (variant) {
      case "gold":
        return "gold-style";
      case "Silver":
        return "silver-style";
      case "Bronze":
        return "bronze-style";
      default:
        return "";
    }
  }

  return (
    <p className={`label-style ${getColor()}`}>
      {variant}
    </p>
  )
}

export default RankingLabel