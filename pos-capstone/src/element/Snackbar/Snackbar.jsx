import React from 'react'

const Snackbar = ({icon, action}) => {
  return (
    <div className='d-flex gap-2 bg-success-emphasis p-3'>
      {icon}
      <p>{action} SuccessFully</p>
    </div>
  )
}

export default Snackbar