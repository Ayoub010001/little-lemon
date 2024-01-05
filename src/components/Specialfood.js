import React from 'react'
import {SpecialCard} from './components'
import greekSalad from '../Assets/greekSalad.png'
import lemonDessert from '../Assets/lemonDessert.png'
import Bruchetta from '../Assets/bruchetta.png'

const specials = [
    {
        name:"Greek salad",
        price:12.99,
        description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        img:greekSalad,
    },
    {
        name:"Bruchetta",
        price: 5.99,
        description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        img:Bruchetta,
    },
    {
        name:"Lemon Dessert",
        price:5.00,
        description:"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        img:lemonDessert,
    }
]

function Specialfood() {
  return (
    <div className='Specials'>
    {
        specials.map((special)=>(
            <SpecialCard name={special.name} price={special.price} description={special.description} img={special.img}/>
        ))
    }
    </div>
  )
}

export default Specialfood