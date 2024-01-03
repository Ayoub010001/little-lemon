import React from 'react'
import largeLogo from '../Assets/little-lemon-large-logo-w.png';
import {navigation} from './Nav'

const socialMedia = [
  {name: "Twitter", link: "www."},
  {name: "Facebook", link: "www."},
  {name: "Instagram", link: "www."},
]

const socialMediaComp = socialMedia.map((media)=>(
  <li><a href='/'>{media.name}</a></li>
))

const navigationBar = navigation.map((link)=>(
  <li><a href='/'>{link}</a></li>
))

function Footer() {
  return (
    <footer>
      <div className='footer--logo'>
        <img src={largeLogo} alt="little lemon logo"></img>
      </div>

      <nav className='footer--Navigation'>
        <h3>Doormat Navigation</h3>
        <ul>
          {navigationBar}
        </ul>
      </nav>

      <div className='footer--contact'>
        <h3>Contact</h3>
        <address>
          <ul>
          <li>Address</li>
            <li><a href="/">info@example.com</a></li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </address>
      </div>

      <nav className='footer--social-Media'>
        <h3>Social Media Links</h3>
        <ul>
          {socialMediaComp}
        </ul>
      </nav>

    </footer>
  )
}

export default Footer