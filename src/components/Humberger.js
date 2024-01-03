import React from 'react'
import { useState } from 'react';
import {Nav} from './components';
import closeMenu from '../Assets/close-icon.svg'
import openMenu from '../Assets/menu-icon.svg'



function Humberger() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

  return (
    <div className="menu-icon" id="menuIcon">
        <img className='HumbergerMenu' src={isOpen ? closeMenu : openMenu} alt='Humberger Menu' onClick={toggleMenu}></img>
        {isOpen && <Nav isOpen={isOpen} />}
    </div>
  )
}

export default Humberger