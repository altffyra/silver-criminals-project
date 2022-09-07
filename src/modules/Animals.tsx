import React from 'react'
import {Animalinterface} from '../modules/interfaces'

interface Props { 
  info:Animalinterface
  update: any
  index: number
  }

const Animals = (props: Props) => {

  ///FIXA gender
  const animalGender: string = ""

  function showAnimal(){

    
  }

  return (

      <section className='animalCard'>

        <img className='imageMedium' src={props.info.picture}></img>

        <h1 className='animalName'>{props.info.name}</h1>

        <div className='animalSpecs'>
          <p>Kön: {animalGender}</p>
          <p>Storlek: {props.info.size}</p>
          <p>Typ: {props.info.type}</p>
          <p>Ras: {props.info.race}</p>
          <p>Ålder: {props.info.age}</p>
          <p>Finns i: {props.info.location}</p>
          <p>Funkar med: {props.info.WellWith} </p>
          <p>Aktivitetsnivå: {props.info.Energy}</p>
        </div>

        <div className='separator'></div>

        <button className='readMore-button' onClick={showAnimal}> Läs mer! </button>
      </section>

  )
}

export default Animals