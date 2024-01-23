import React, { useState } from 'react'
import {Button} from './components'

const occasions = ["None","Birthday", "Engagement", "Anniversary"];
const preferences = ["None","Window seat", "Booth", "Outdoor patio", "Standard table"]

const occasionOptions = occasions.map((occasion)=>(
    <option key={occasion} value={occasion}>{occasion}</option>
))
const preferencesOptions = preferences.map((pref)=>(
    <option key={pref} value={pref}>{pref}</option>
))

// date
const today = new Date();

// Format the date as "YYYY-MM-DD"
const formattedDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);


function Reservation({formData,setFormData, availableTimes, dipatch}) {

    //availableTimes
    const reserveTimeOptions = availableTimes.map((availableTime)=>(
        <option key={availableTime} value={availableTime}>{availableTime}</option>
    ))

    //Guest state
    const [guestCount, setGuestCount] = useState(1);

    function increment(){
        setGuestCount(prev => prev + 1 );
        setFormData(formdata =>{
            return {...formdata, guests:guestCount}
        })
    }

    function decrement(){
        setGuestCount(prev => (prev === 1 ? prev : prev - 1) );
        setFormData(formdata =>{
            return {...formdata, guests:guestCount}
        })
    }

    function handleChange(e){
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setFormData((formObj)=>{
            return {...formObj, [inputName]:inputValue}
        })
        if(inputName === "date"){
            dipatch({type:inputValue});
        }
        console.log(inputName+" : "+ inputValue);
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log('Form submitted with values:', formData);
    }


    return (
    <section className='reservation--section'>
        <h1 className='text-center main-title'>Reserve Table</h1>
        <h2 className='text-center sub-title'>Little Lemon <span>Chicago</span></h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Full Name</label>
                <input name="fullName" type={"text"} value={formData.fullName} onChange={handleChange}></input>
            </div>

            <div>
                <label>Guests</label>
                <div className='guestsInput'>
                    <i className="fa-solid fa-plus" onClick={increment}></i>
                    <input name='guests' type={"number"} min={1} value={guestCount} onChange={handleChange}></input>
                    <i className="fa-solid fa-minus" onClick={decrement}></i>
                </div>
            </div>

            <div>
                <label>Date</label>
                <input name='date' type={"date"}  min={formattedDate} value={formData.date} onChange={handleChange} required></input>
            </div>

            <div>
                <label>Choose Time</label>
                <select name='time' value={formData.time} onChange={handleChange}>
                  {reserveTimeOptions}
                </select>
            </div>

            <div>
                <label>Occasion</label>
                <select name='occasion' value={formData.occasion} onChange={handleChange}>
                  {occasionOptions}
                </select>
            </div>

            <div>
                <label>Sitting preferences</label>
                <select name='prefs' value={formData.prefs} onChange={handleChange}>
                  {preferencesOptions}
                </select>
            </div>

            <div className='textArea'>
                <label>Additional comments</label>
                <textarea placeholder='Comment ...' name='comment' value={formData.comment} onChange={handleChange}>
                </textarea>
            </div>

            <Button content="Reserve table"/>
        </form>
    </section>
  )
}

export default Reservation