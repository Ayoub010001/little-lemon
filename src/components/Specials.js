import React from 'react'
import {Specialfood} from './components'

import {Button} from './components'

function Specials() {
  return (
    <section id="specials-section">
        <div className='max-container px-20'>
          <div className='flex-nav'>
            <h2 className='main-title specials-title'>This week specials!</h2>
            <Button content="Online Menu"/>
          </div>
          <Specialfood />
        </div>
    </section>
  )
}

export default Specials