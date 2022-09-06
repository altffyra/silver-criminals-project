import React from 'react'
type Props = {}

const Animals = (props: Props) => {

  const animalName: string = "placeholder1"
  const animalGender: string = "placeholder1"
  const animalSize: string = "placeholder1"
  const animalType: string = "placeholder1"
  const animalRace: string = "placeholder1"
  const animalAge: string = "placeholder1"
  const animalLocation: string = "placeholder1"
  const animalGoodWith: string = "placeholder1"
  const animalEnergy: string = "placeholder1"
  const animalPicture: string = "placeholder1"

  return (
    <div className='animalCard'>
      <div className='pictureFrame'>
        <div className='pictureArea'>{animalPicture}</div>
      </div>
      <h1 className='animalName'>{animalName}</h1>
      <div className='animalSpecs'>
        <p>Gender: {animalGender}</p>
        <p>Size: {animalSize}</p>
        <p>Type: {animalType}</p>
        <p>Race: {animalRace}</p>
        <p>Age: {animalAge}</p>
        <p>Location: {animalLocation}</p>
        <p>Good with: {animalGoodWith}</p>
        <p>Energy-Level: {animalEnergy}</p>
      </div>

    </div>
  )
}

export default Animals