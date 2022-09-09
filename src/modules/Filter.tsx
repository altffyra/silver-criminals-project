import React, { ChangeEvent, FormEvent } from 'react'
import {Animalinterface, FilterInterface} from '../modules/interfaces'
import { SetStateAction, useState } from 'react';

interface Props { 
  info:Animalinterface[];
  update: any
  }

  


type FormType =  ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>

// type FilterGenderType = "gender" | "race"

const Filter = (props: Props) => {

  const [filter, setFilter] = useState<FilterInterface | any>({})
 
  function changeForm(e:FormType){

    if (e.target.value == "Any") {
      const prop = e.target.name;
      delete filter[prop]
      console.log(filter)
  }
    else {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    })
    console.log(filter)
  }
  }
  return (
    <div className='outerFilterWrapper' id="search">
      <h2>Sök efter:</h2>
    <div className='filterWrapper'> 
      <div className='left-form'>
        <p>Plats</p> <input type="text" name="Location" onChange={()=> changeForm(event)}></input>
        <div className='searchForms'>
          <p>Gender</p> 
          <select name='gender' onChange={()=> changeForm(event)}>
          <option value="Any" >Alla</option>
          <option value="Hane">Hane</option>
          <option value="Hona">Hona</option>
          </select>
        <p>Storlek</p> 
          <select name='size'onChange={()=> changeForm(event)}>
          <option value="Any">Alla</option>
          <option value="Liten">Liten</option>
          <option value="Medium">Medium</option>
          <option value="Stor">Stor</option>
        </select>
      <p>Typ</p> <select name='type' onChange={()=> changeForm(event)}>
        <option value="Any">Alla</option>
        <option value="Katt">Katt</option>
        <option value="Hund">Hund</option>
        <option value="other">Annat</option>
      </select>
      </div>
      <div className='right-form'>
      <p>Bra med små barn</p> 
      <select name='WellWith' onChange={()=> changeForm(event)}>
      <option value="Any">Ingen Preferens</option>
      <option value="Små barn">Bra</option>
      </select>
      <p>Bra med stora barn</p> 
      <select name='WellWith' onChange={()=> changeForm(event)}>
      <option value="Any">Ingen Preferens</option>
      <option value="Stora barn">Bra</option>
      </select>
      <p>Bra med katter</p> 
      <select  name='WellWith' onChange={()=> changeForm(event)}>
      <option value="Any">Ingen Preferens</option>
      <option value="Katter">Bra</option>
      </select>
      <p>Bra med hundar</p> 
      <select  name='WellWith' onChange={()=> changeForm(event)}>
      <option value="Any">Ingen Preferens</option>
      <option value="Hundar">Bra</option>
      
      </select>
      </div>

    
      </div>
    
    </div>
    <button className='filter-button-cancel' onClick={()=> filterSearch= {}}>Nollställ             <img
              className="adopt__btn__logo"
              src="../src/assets/logo.png"
              alt=""
            />
            </button>
      <button className='filter-button'>Sök!            <img
              className="adopt__btn__logo"
              src="../src/assets/logo.png"
              alt=""
            />
            </button>
  </div>
  )
}

export default Filter