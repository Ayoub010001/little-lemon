import React, { useReducer} from 'react'
import {Banner, Reservation} from './components'



function initializeTimes(){
  return ["17:00","18:00","19:00","20:00","21:00","22:00"];
}

function updateTimes (state, action){
  return state;
}

function Main({formData,setFormData}) {

    const [availableTimes, dipatch] = useReducer(updateTimes , initializeTimes());

  return (
    <main>
        <Banner />
        <Reservation formData={formData} setFormData={setFormData} availableTimes={availableTimes} dipatch={dipatch} />
    </main>
  )
}

export default Main
export {initializeTimes,updateTimes}