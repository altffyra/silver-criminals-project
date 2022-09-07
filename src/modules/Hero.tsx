import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='hero'>
      <img className='heroImg' src="../src/assets/heroCropped.jpg" alt="Picture of a bunch of dogs in front of a pink wall" />
      <div className='heroTextSection'>
        <p className='heroText'>
        Sök efter djur som behöver ett nytt hem som passar just dig!
        </p>
        <button className='hero btn'>Ta mig dit! <img className='heroLogo' src="../src/assets/logo.png" alt="" /></button>
      </div>
    </section>
  )
}

export default Hero