import React from 'react'
import {Nav, Humberger} from './components'
import littleLemon from '../Assets/little-lemon-logo.png'

function Header() {
  return (
    <header>
      <div className='header-logo'>
        <img src={littleLemon} alt="little lemon logo"></img>
      </div>
      <Humberger />
      <Nav />
    </header>
  )
}

export default Header