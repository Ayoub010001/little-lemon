import React from 'react'



function Button(props) {

  function handleContinue(){
    props.setIsSuccess(false);
  }

  return (
    <>
      {props.setIsSuccess ? <button className='btn' onClick = {handleContinue}>{props.content}</button> : <button className='btn'>{props.content}</button>}
    </>
  )
}

export default Button