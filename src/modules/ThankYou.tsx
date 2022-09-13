import React from 'react'

type Props = {
  close: () => void;

}

const ThankYou = (props: Props) => {
  return (
    <div className="blurr-div">

        <div className='small_thanks'>
            <p>
              Tack för din anmälan! <br />
              Djuret är nu reserverad tillsvidare.
              Vi återkommer till dig inom 5 arbetsdagar.
            </p>
            <div className='separator'></div>
              
            <button onClick={props.close} className=''>OK, stäng.
            <img className="adopt__btn__logo" src="../src/assets/logo.png" alt="" /></button>
        </div>
    </div>
  )
}

export default ThankYou