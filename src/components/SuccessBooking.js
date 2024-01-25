import React from 'react'
import Button from './Button'
import SuccessIcon from '../Assets/success-icon.png'

function SuccessBooking({setIsSuccess}) {

  return (
    <div className='Success-container'>
      <div className='SuccessBooking-card'>
          <img src={SuccessIcon} alt="success"></img>
          <h2 className='SuccessBooking-card-title'>Your Table is booked <br /> successfully</h2>
          <Button content="Continue" setIsSuccess={setIsSuccess}/>
      </div>
    </div>
  )
}

export default SuccessBooking