import React, { useState } from 'react'
import {Button} from './components'

const occasions = ["None","Birthday", "Engagement", "Anniversary"];
const preferences = ["None","Window seat", "Booth", "Outdoor patio", "Standard table"]

const occasionOptions = occasions.map((occasion)=>(
    <option value={occasion}>{occasion}</option>
))
const preferencesOptions = preferences.map((pref)=>(
    <option value={pref}>{pref}</option>
))

// date
const today = new Date();

// Format the date as "YYYY-MM-DD"
const formattedDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);


function Reservation() {

    const [guestCount, setGuestCount] = useState(1);
    
    function increment(){
        setGuestCount(prev => prev + 1 );
    }
    
    function decrement(){
        setGuestCount(prev => (prev === 1 ? prev : prev - 1) );
    }

    return (
    <section className='reservation--section'>
        <h1 className='text-center main-title'>Reserve Table</h1>
        <h2 className='text-center sub-title'>Little Lemon <span>Chicago</span></h2>
        <form>
            <div>
                <label>Full Name</label>
                <input type={"text"}></input>
            </div>

            <div>
                <label>Guests</label>
                <div className='guestsInput'>
                    <i class="fa-solid fa-plus" onClick={increment}></i>
                    <input type={"number"} min={1} value={guestCount}></input>
                    <i class="fa-solid fa-minus" onClick={decrement}></i>
                </div>
            </div>

            <div>
                <label>Date</label>
                <input type={"date"}  min={formattedDate} required></input>
            </div>

            <div>
                <label>Time</label>
                <input type={"time"} required></input>
            </div>

            <div>
                <label>Occasion</label>
                <select>
                  {occasionOptions}
                </select>
            </div>

            <div>
                <label>Sitting preferences</label>
                <select>
                  {preferencesOptions}
                </select>
            </div>

            <div className='textArea'>
                <label>Additional comments</label>
                <textarea placeholder='Comment ...'>
                </textarea>
            </div>

            <Button content="Reserve table"/>
        </form>
    </section>
  )
}

export default Reservation