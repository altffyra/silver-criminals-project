import React from 'react'
import {Animalinterface} from '../modules/interfaces'

interface Props { 
  info:Animalinterface[];
  update: any
  }

const Filter = (props: Props) => {

  function changeForm(){


  }

  return (
    <div> 
      <h2>Sök efter:</h2>
      <div className='searchForms'>
        <p>Gender</p> <select>
        <option value="male">Hane</option>
        <option value="female">Hona</option>
      </select>
      <p>Storlek</p> <select onChange={changeForm}>
        <option value="s">Liten</option>
        <option value="m">Medium</option>
        <option value="l">Stor</option>
      </select>
      <p>Typ</p> <select onChange={changeForm}>
        <option value="cat">Katt</option>
        <option value="dog">Hund</option>
        <option value="other">Annat</option>
      </select>
      {/* <p>Art</p> <input type="text" onChange={changeForm}> Art</input> */}

      </div>
    </div>
  )
}

export default Filter