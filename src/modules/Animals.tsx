import React from "react";
import { Animalinterface } from "../modules/interfaces";

interface Props {
  info: Animalinterface;
  index: number;
  showOverlay: ({})=> void;
}

const Animals = (props: Props) => {
  
let nothing:string = ""
if (!props.info.hasOwnProperty('WellWithSmall') &&  !props.info.hasOwnProperty('WellWithLarge') &&  !props.info.hasOwnProperty('WellWithCats')  &&  !props.info.hasOwnProperty('WellWithDogs'))
nothing = "Ingen"

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
          <p><span className="dot"></span> Typ: {props.info.type}.</p>
          <p><span className="dot"></span> Ras: {props.info.race}.</p>
          <p><span className="dot"></span> Kön: {props.info.gender}.</p>
          <p><span className="dot"></span> Storlek: {props.info.size}.</p>
        </section>
        <section className="section__two">
          <p><span className="dot"></span> Ålder: {props.info.age} år.</p>
          <p><span className="dot"></span> Finns i: {props.info.location}.</p>
          <p><span className="dot"></span> Funkar med: {props.info.WellWithSmall} {props.info.WellWithLarge} {props.info.WellWithCats} {props.info.WellWithDogs} {nothing}</p>
          <p><span className="dot"></span> Aktivitetsnivå: {props.info.energy} av 10.</p>
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
