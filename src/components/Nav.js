import React from 'react'

export const navigation = ["Home","About","Menu","Reservations","Order Online", "Login"];

const navigationBar = navigation.map((link)=>(
  <li><a href="/">{link}</a></li>
))

function Nav({isOpen}) {
  return (
    <nav className={`Header--Navigation ${isOpen && 'isOpen'}`}>
      <ul>
      {navigationBar}
      </ul>
    </nav>
  )
}

export default Nav