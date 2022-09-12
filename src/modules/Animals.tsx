import React from "react";
import { Animalinterface } from "../modules/interfaces";

interface Props {
  info: Animalinterface;
  update: any;
  index: number;
  showOverlay: any;
}

const Animals = (props: Props) => {

  const isBooked: string = props.info.booked
    ? "frame bookedStamp"
    : "frame";
  function readMoreFunction() {
    props.showOverlay(props.info);
  }

  return (
    <section className="animalCard">
      <figure className={isBooked}>
        <img className="imageMedium" src={props.info.picture}></img>
      </figure>
      <div className="top">
        <h1 className="animalName">{props.info.name}</h1>
        <p className="date">
          Kom till oss:<br></br>
          {props.info.incomeDate}
        </p>
      </div>
      <div className="animalSpecs">
        <section className="section__one">
          <p>Typ: {props.info.type}.</p>
          <p>Ras: {props.info.race}.</p>
          <p>Kön: {props.info.gender}.</p>
          <p>Storlek: {props.info.size}.</p>
        </section>
        <section className="section__two">
          <p>Ålder: {props.info.age} år.</p>
          <p>Finns i: {props.info.location}.</p>
          <p>Funkar med: {props.info.WellWith}.</p>
          <p>Aktivitetsnivå: {props.info.energy} av 10.</p>
        </section>
      </div>

      <div className="separator"></div>

      <button className="readMore-button" onClick={readMoreFunction}>
        {" "}
        Läs mer!
        <img className="adopt__btn__logo" src="../src/assets/logo.png" alt="" />
      </button>
    </section>
  );
};

export default Animals;
