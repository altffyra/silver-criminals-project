import React from 'react'
import {Animalinterface} from '../modules/interfaces'

interface Props { 
  info:Animalinterface
  update: any
  index: number
  showOverlay:any
  }

const Animals = (props: Props) => {
  
function readMoreFunction() {
  props.showOverlay(props.info)
}

  return (

      <section className='animalCard'>
        <figure className='frame'>
          <img className='imageMedium' src={props.info.picture}></img>
        </figure>

        <h1 className='animalName'>{props.info.name}</h1>

        <div className='animalSpecs'>
          <p>Kön: {props.info.gender}.</p>
          <p>Storlek: {props.info.size}.</p>
          <p>Typ: {props.info.type}.</p>
          <p>Ras: {props.info.race}.</p>
          <p>Ålder: {props.info.age} år.</p>
          <p>Finns i: {props.info.location}.</p>
          <p>Funkar med: {props.info.WellWith}.</p>
          <p>Aktivitetsnivå: {props.info.energy} av 10.</p>
        </div>

        <div className='separator'></div>

        <button className='readMore-button' onClick={readMoreFunction}> Läs mer! 
              <img
                className="adopt__btn__logo"
                src="../src/assets/logo.png"
                alt=""
              />
            </button>
      </section>

  )
}

export default Animals