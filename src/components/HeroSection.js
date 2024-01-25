import React from 'react'
import heroImg from '../Assets/heroImg.png'
import {Button} from './components'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className='full-w hero--section'>
        <div className='max-container flex px-20 hero-content'>
            <div>
                <h1 className='main-title hero-title'>Little Lemon</h1>
                <h2 className='sub-title hero-sub-title'><span>Chicago</span></h2>
                <p className='main-text hero-main-text'>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <Link to="/reserve-table"><Button content='Reserve table'/></Link>
            </div>
            <img src={heroImg} alt="reservation"></img>
        </div>
    </section>
  )
}

export default HeroSection