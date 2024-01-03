import React from 'react'
import reservationImg from '../Assets/reservationImg.jpg'

function Banner() {

  const style={
    backgroundImage: `url(${reservationImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height:'320px'
  }

  return (
    <section className='banner--section' style={style}>
        {/* <img src={reservationImg} alt="for reservation"></img> */}
    </section>
  )
}

export default Banner