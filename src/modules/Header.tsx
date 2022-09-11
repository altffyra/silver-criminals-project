import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header">
      <img
        className="logo"
        src="../src/assets/logo.png"
        alt="Rescue Rabbits Logo"
      />
      <img
        className="logo-text"
        src="../src/assets/rescuerabbits.png"
        alt="Rescue Rabbits"
      />
    </header>
  );
};

export default Header;
