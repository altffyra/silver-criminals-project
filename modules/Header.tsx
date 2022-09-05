import React from 'react';


type Props = {}

const Header = (props: Props) => {
  return (
    <header className='headerModule'>
        <img src="../src/assets/logo.png" alt="Rescue Rabbits Logo" />
        <img src="../src/assets/rescuerabbits.png" alt="Rescue Rabbits" />
    </header>
  )
}

export default Header;