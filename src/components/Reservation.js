import React from 'react'

function Reservation() {
  return (
    <section>
        <h1>Reserve Table</h1>
        <h2>Little Lemon <span>Chicago</span></h2>
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

            <div>
                <label>Additional comments</label>
                <textarea placeholder='Comment ...'>
                </textarea>
            </div>

            <button>Reserve table</button>
        </form>
    </section>
  )
}

export default Reservation