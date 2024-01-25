import React from 'react'



function Button(props) {

  function handleContinue(){
    props.setIsSuccess(false);
  }

  return (
    <>
      {props.setIsSuccess ? <button className='btn' onClick = {handleContinue} aria-label="On Click">{props.content}</button> : <button className='btn' aria-label="On Click">{props.content}</button>}
    </>
  )
}

export default Button