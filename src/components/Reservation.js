import React, { useState } from 'react'
import {Button, SuccessBooking} from './components'

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

    //is Successed 
    const [isSuccess, setIsSuccess] = useState(false);

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
        setIsSuccess(()=> true);
        console.log('Form submitted with values:', formData);
    }


    return (
    <section className='reservation--section'>
        <h1 className='text-center main-title'>Reserve Table</h1>
        <h2 className='text-center sub-title'>Little Lemon <span>Chicago</span></h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" name="fullName" type={"text"} value={formData.fullName} onChange={handleChange} required minLength={3} placeholder="Enter your Name"></input>
            </div>

            <div>
                <label htmlFor="guests">Guests</label>
                <div className='guestsInput'>
                    <i className="fa-solid fa-plus" onClick={increment}></i>
                    <input id="guests" name='guests' type={"number"} min={1} value={guestCount} onChange={handleChange}></input>
                    <i className="fa-solid fa-minus" onClick={decrement}></i>
                </div>
            </div>

            <div>
                <label htmlFor="date">Date</label>
                <input id='date' name='date' type={"date"}  min={formattedDate} value={formData.date} onChange={handleChange} required></input>
            </div>

            <div>
                <label htmlFor='time'>Choose Time</label>
                <select id='time' name='time' value={formData.time} onChange={handleChange}>
                  {reserveTimeOptions}
                </select>
            </div>

            <div>
                <label htmlFor='occasion'>Occasion</label>
                <select id='occasion' name='occasion' value={formData.occasion} onChange={handleChange}>
                  {occasionOptions}
                </select>
            </div>

            <div>
                <label htmlFor='prefs'>Sitting preferences</label>
                <select id='prefs' name='prefs' value={formData.prefs} onChange={handleChange}>
                  {preferencesOptions}
                </select>
            </div>

            <div className='textArea'>
                <label htmlFor='comment'>Additional comments</label>
                <textarea placeholder='Comment ...' id='comment' name='comment' value={formData.comment} onChange={handleChange}>
                </textarea>
            </div>

            <Button content="Reserve table"/>
        </form>

        {
            isSuccess && <SuccessBooking setIsSuccess={setIsSuccess}/>
        }
    </section>
  )
}

export default Reservation