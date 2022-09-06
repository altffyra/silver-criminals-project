import React from 'react'
import {Animalinterface} from '../modules/interfaces'

interface Props { 
  info:Animalinterface
  update: any
  index: number
  }

const Filter = (props: Props) => {
  return (
    <div>Filter</div>
  )
}

export default Filter