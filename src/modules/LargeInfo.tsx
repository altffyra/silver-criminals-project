import React from 'react'
import {Animalinterface} from '../modules/interfaces'
type Props = {
    info:Animalinterface;
}

const LargeInfo = (props: Props) => {
    console.log(props.info)
  return (
    //HIDDEN KLASSEN GÖMMER ALLT
    <div className="animalInfoWrapper hidden">
    <div className="animalInfo">
      <div className="animalInfoImage">
            <img src={props.info.picture}></img>
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
  </div>
  )
}

export default LargeInfo