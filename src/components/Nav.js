import React from 'react'
import { Link } from 'react-router-dom';

export const navigation = ["Home","About","Menu","Reservations","Order Online", "Login"];



const navigationBar = navigation.map((link)=>(
  <li key={link}><Link to={link === "Home" ? "/": "/reserve-table"}>{link}</Link></li>
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