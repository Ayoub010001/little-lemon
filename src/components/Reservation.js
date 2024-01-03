import React from 'react'

function Reservation() {
  return (
    <section className='reservation--section'>
        <h1 className='main-title'>Reserve Table</h1>
        <h2 className='sub-title'>Little Lemon <span>Chicago</span></h2>
        <form>
            <div>
                <label>Full Name</label>
                <input type={"text"}></input>
            </div>

            <div>
                <label>Guests Number</label>
                <input type={"number"}></input>
            </div>

            <div>
                <label>Date</label>
                <input type={"date"}></input>
            </div>

            <div>
                <label>Time</label>
                <input type={"time"}></input>
            </div>

            <div>
                <label>Occasion</label>
                <select>
                  <option>Occasion</option>
                </select>
            </div>

            <div>
                <label>Sitting preferences</label>
                <select>
                  <option>None</option>
                </select>
            </div>

            <div className='textArea'>
                <label>Additional comments</label>
                <textarea placeholder='Comment ...'>
                </textarea>
            </div>

            <button className='btn'>Reserve table</button>
        </form>
    </section>
  )
}

export default Reservation