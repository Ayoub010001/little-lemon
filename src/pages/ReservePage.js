import React, {useState} from 'react'
import {Main} from '../components/components'


function ReservePage() {
  //form state
  const [formData, setFormData] = useState({
      fullName:'',
      guests:1,
      date:'',
      time:'17:00',
      occasion:'None',
      prefs: 'None',
      comment: ''
  });

  return (
    <>
      <Main formData={formData} setFormData={setFormData}/>
    </>
  )
}

export default ReservePage