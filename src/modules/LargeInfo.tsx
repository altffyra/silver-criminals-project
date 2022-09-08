import React from 'react'
import {Animalinterface} from '../modules/interfaces'
type Props = {
    info:Animalinterface;
}

const LargeInfo = (props: Props) => {
    console.log(props.info)
  return (
    //HIDDEN KLASSEN GÖMMER ALLT
    <div className="info__card">

      <img className='info__img' src={props.info.picture}></img>


      <article className="info__text">
        <h1 className='info__name'>{props.info.name}</h1>

        <div className='info__card__specs__one'>
          <p>Ras: {props.info.race}</p>
          <p>Typ: {props.info.type}</p>
          <p>Storlek: {props.info.size}</p>
        </div>

        <div className='info__card__specs__two'>
          <p>Plats: {props.info.location}</p>
          <p>Ålder: {props.info.age}</p>
          <p>Energi-nivå: {props.info.Energy}</p>
        </div>

      <article className="animalInfoAbout">
        <h1 className="animalName">{props.info.name}</h1>
        <p className='animalInfoP'>Ras: {props.info.race}</p>
        <p className='animalInfoP'>Typ: {props.info.type}</p>
        <p className='animalInfoP'>Storlek: {props.info.size}</p>
        <p className='animalInfoP'>Plats: {props.info.location}</p>
        <p className='animalInfoP'>Ålder: {props.info.age}</p>
        <p className='animalInfoP'>Energi-nivå: {props.info.energy}</p>
      </article>
    </div>

      
      <p className='info__card__about'>Lorem ipsum dolor sit amet. Ex blanditiis voluptatem et maxime reprehenderit ea molestiae culpa quo velit voluptates ea possimus aspernatur! Sed expedita quia quo itaque saepe sit dolore similique aut illo atque est ducimus impedit. Et rerum dolorum internos molestias et quae doloribus non voluptas inventore aut aspernatur explicabo.
         Sed illum velit qui fuga fugit non facilis tempore in natus aliquid. Aut molestias molestiae a veritatis consequatur ab nostrum omnis et repellat doloremque sit Quis eaque qui dolorum necessitatibus sit ullam amet.
      </p>
      </article> 

  </div>
  )
}

export default LargeInfo