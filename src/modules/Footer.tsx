import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (

  <div className="footer">
    <div className="footer__flex">

      <div className='logo'>

        <div className='logo__img'>
          <img className='img'src="https://www.silhouette.pics/images/quotes/english/general/rabbit-paw-print-silhouette-free-52650-101458.jpg" alt="" />
        </div>

        <div className='logo__text'>
          <h1 className='logo__item__1'>Rescue</h1>
          <h1 className='logo__item__2'>Rabbits</h1>
        </div>
        
      </div>

     <div className='optn'>
        <span className='optn__item'>Vilka är vi?</span>
        <span className='optn__item'>Vanliga frågor</span>
     </div>

     <div className='social'>
        <p className='social__item'>Följ oss på...</p>
        <img className='social__img' src="https://img.icons8.com/ios-glyphs/344/twitter--v1.png" alt="" />
        <img className='social__img' src="https://img.icons8.com/ios-filled/344/facebook-new.png" alt="" />
        <img className='social__img' src="https://img.icons8.com/ios-filled/344/instagram-new--v1.png" alt="" />
     </div>

    </div>

    <p className='copyright'>copyright © 2022 all rights reserved</p>

  </div>
  )
}

export default Footer