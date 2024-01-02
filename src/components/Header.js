import React from 'react'
import {Nav} from './components'
import littleLemon from '../Assets/little-lemon-logo.png'

function Header() {
  return (
    <header>
      <img src={littleLemon} alt="little lemon logo"></img>
      <Nav />
    </header>
  )
}

export default Header