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
    <div className='animalCard'>
      <div className='pictureFrame'>
      <img className='imageMedium' src={props.info.picture}></img>
      </div>
      <h1 className='animalName'>{props.info.name}</h1>
      <div className='animalSpecs'>
        <p>Gender: {animalGender}</p>
        <p>Size: {props.info.size}</p>
        <p>Type: {props.info.type}</p>
        <p>Race: {props.info.race}</p>
        <p>Age: {props.info.age}</p>
        <p>Location: {props.info.location}</p>
        <p>Good with: {props.info.WellWith} </p>
        <p>Energy-Level: {props.info.Energy}</p>
      </div>
    <button className='readMore-button' onClick={showAnimal}> Läs mer! </button>
    </div>
  )
}

export default Animals