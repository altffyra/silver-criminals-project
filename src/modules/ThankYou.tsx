import React from 'react'

type Props = {
  close:any
}

const ThankYou = (props: Props) => {
  return (
    <div className="blurr-div">

        <div className='small_thanks'>
            <p>
                Tack för din anmälan!
                vi reserverar djuret tills vidare
                sedan kontaktar ägaren dig!
                </p>

            <button onClick={props.close} className=''>OK, stäng
            <img className="adopt__btn__logo" src="../src/assets/logo.png" alt="" /></button>
        </div>
    </div>
  )
}

export default ThankYou