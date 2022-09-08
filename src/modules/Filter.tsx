import React, { ChangeEvent, FormEvent } from 'react'
import {Animalinterface} from '../modules/interfaces'

interface Props { 
  info:Animalinterface[];
  update: any
  }
type FormType =  ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>


const Filter = (props: Props) => {

  let filterSearch:any= {}
  function changeForm(event:FormType){
    if (event.target.value== "Hane"|| event.target.value== "Hona" ) {
      filterSearch.gender = event.target.value
  }    
    else if(event.target.value== "genderAny"){
      delete filterSearch.gender
    }
  console.log(filterSearch)
  }

  return (
    <div className='outerFilterWrapper'>
      <h2>Sök efter:</h2>
    <div className='filterWrapper'> 
      <div className='left-form'>
        <p>Plats</p> <input type="text" onChange={changeForm}></input>
        <div className='searchForms'>
          <p>Gender</p> 
          <select onChange={changeForm}>
          <option value="genderAny">Alla</option>
          <option value="Hane">Hane</option>
          <option value="Hona">Hona</option>
        </select>
        <p>Storlek</p> 
          <select onChange={changeForm}>
          <option value="sizeAny">Alla</option>
          <option value="Liten">Liten</option>
          <option value="Medium">Medium</option>
          <option value="Stor">Stor</option>
        </select>
      <p>Typ</p> <select onChange={changeForm}>
        <option value="typeAny">Alla</option>
        <option value="Katt">Katt</option>
        <option value="Hund">Hund</option>
        <option value="other">Annat</option>
      </select>
      </div>
      <div className='right-form'>
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

    
      </div>
    
    </div>
    <button className='filter-button-cancel' onClick={()=> filterSearch= {}}>Nollställ</button>
      <button className='filter-button'>Sök!</button>
  </div>
  )
}

export default Filter