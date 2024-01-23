import React from 'react'

function SpecialCard(props) {
  const styleBg = {
    background: `url(${props.img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  }
  return (
    <article className='SpecialCard'>
      <div className='card--img' style={styleBg}>
      </div>
      <div className='card--desc'>
        <div className='flex-nav card-header'>
          <h2 className='card-title'>{props.name}</h2>
          <p className='card-price'>${props.price}</p>
        </div>
        <p className='card-text'>
          {props.description}
        </p>
          <p  className='delivery'>Order a delivery <i className="fa-solid fa-truck"></i></p>
      </div>
    </article>
  )
}

export default SpecialCard