import React from 'react'
import {Animalinterface} from '../modules/interfaces'

interface Props { 
  info:Animalinterface
  update: any
  index: number
  }

const Animals = (props: Props) => {

  const animalName: string = props.info.name
  const animalGender: string = ""
  const animalSize: string = props.info.size
  const animalType: string = props.info.type
  const animalRace: string = props.info.race
  const animalAge: string = props.info.age
  const animalLocation: string = props.info.location
  const animalGoodWith: any = props.info.WellWith
  const animalEnergy: string = props.info.Energy
  const animalPicture: string = props.info.picture

  return (
    <div className='animalCard'>
      <div className='pictureFrame'>
      <img className='imageMedium' src={animalPicture}></img>
      </div>
      <h1 className='animalName'>{animalName}</h1>
      <div className='animalSpecs'>
        <p>Gender: {animalGender}</p>
        <p>Size: {animalSize}</p>
        <p>Type: {animalType}</p>
        <p>Race: {animalRace}</p>
        <p>Age: {animalAge}</p>
        <p>Location: {animalLocation}</p>
        <p>Good with: {animalGoodWith} </p>
        <p>Energy-Level: {animalEnergy}</p>
      </div>

    </div>
  )
}

export default Animals