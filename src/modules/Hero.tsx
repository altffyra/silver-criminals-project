import React from "react";

type Props = {

};

const Hero = (props: Props) => {
  return (
    <section className="hero">
      <img
        className="heroImg"
        src="../src/assets/heroCropped.jpg"
        alt="Picture of a bunch of dogs in front of a pink wall"
      />
      <div className="heroTextSection">
        <p className="heroText">
          Alla djur förtjänar ett eget hem och kärlek. Hitta din nya bästa vän idag!
        </p>
        <button className="hero btn">
          {" "}
          <a href="#search"> Ta mig dit!</a>{" "}
          <img className="heroLogo" src="../src/assets/logo.png" alt="" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
