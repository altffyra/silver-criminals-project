import React from 'react'
import {Animalinterface} from '../modules/interfaces'

interface Props { 
  info:Animalinterface[];
  update: any
  }

const Filter = (props: Props) => {

  function changeForm(event:any){
  if (event.target.value== "male") {
    console.log("male")
  }    

  }

  return (
    <div className='filterWrapper'> 
      <h2>Sök efter:</h2>
      <p>Plats</p> <input type="text" onChange={changeForm}></input>
      <div className='searchForms' onChange={changeForm}>
        <p>Gender</p> <select>
        <option value="genderAny">Alla</option>
        <option value="male">Hane</option>
        <option value="female">Hona</option>
      </select>
      <p>Storlek</p> <select onChange={changeForm}>
        <option value="sizeAny">Alla</option>
        <option value="s">Liten</option>
        <option value="m">Medium</option>
        <option value="l">Stor</option>
      </select>
      <p>Typ</p> <select onChange={changeForm}>
        <option value="typeAny">Alla</option>
        <option value="cat">Katt</option>
        <option value="dog">Hund</option>
        <option value="other">Annat</option>
      </select>
      <p>Bra med små barn</p> <select onChange={changeForm}>
      <option value="goodWithAnySmall">Ingen Preferens</option>
      <option value="goodWithChildrenUnder5">Bra</option>
      </select>
      <p>Bra med stora barn</p> <select onChange={changeForm}>
      <option value="goodWithAnyLarge">Ingen Preferens</option>
      <option value="goodWithChildrenOver5">Bra</option>
      </select>
      <p>Bra med katter</p> <select onChange={changeForm}>
      <option value="goodWithCatsAny">Ingen Preferens</option>
      <option value="goodWithCats">Bra</option>
      </select>
      <p>Bra med hundar</p> <select onChange={changeForm}>
      <option value="goodWithDogsAny">Ingen Preferens</option>
      <option value="goodWithDogs">Bra</option>
      </select>

    
      </div>
      <button className='filter-button-cancel'>Nollställ</button>
      <button className='filter-button'>Sök!</button>
    </div>
  )
}

export default Filter