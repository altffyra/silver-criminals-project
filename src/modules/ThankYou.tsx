import React from 'react'
import { Adopted, Animalinterface } from '../modules/interfaces'

type Props = {
  close: any
  info: Adopted;

}

const ThankYou = (props: Props) => {
  return (
    <div className="blurr-div">

        <div className='small_thanks'>
            <p>
              Tack för din anmälan, {props.info.userName}! <br />
              {props.info.animalName} är nu reserverad tillsvidare.
              Vi återkommer till dig inom 5 arbetsdagar.
            </p>
            <div className='separator'></div>
              
            <button onClick={props.close} className=''>OK, stäng
            <img className="adopt__btn__logo" src="../src/assets/logo.png" alt="" /></button>
        </div>
    </div>
  )
}

export default ThankYou