import React from 'react'



function Button(props) {
  return (
    <>
      <button className='btn'>{props.content}</button>
    </>
  )
}

export default Button