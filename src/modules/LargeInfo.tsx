import React from "react";
import { Animalinterface } from "../modules/interfaces";

type Props = {
  info: Animalinterface;
  showOverlay: ({}) => void
  switchToForm: ()=> void;
};


const LargeInfo = (props: Props) => {

  const bookedLarge: string = props.info.booked
    ? "frame bookedStampLarge"
    : "frame";

    let nothing:string = ""
if (!props.info.hasOwnProperty('WellWithSmall') &&  !props.info.hasOwnProperty('WellWithLarge') &&  !props.info.hasOwnProperty('WellWithCats')  &&  !props.info.hasOwnProperty('WellWithDogs'))
nothing = "Ingen"

  return (
    <div className="blurr-div">
      <div className="info__card">
        <div className="img__close">
          <button onClick={props.showOverlay} className="close">
            x
          </button>
          <figure className={bookedLarge}>
            <img className="info__img" src={props.info.picture}></img>
          </figure>
 
        </div>

        <article className="info__text">
          <section className="largeTop">
            <h1 className="info__name">{props.info.name}</h1>
            <p className="date">
              Kom till oss:<br></br>
              {props.info.incomeDate}
            </p>
          </section>

          <div className="largeAnimalSpecs">
            <section className="largeSection__one">
              <p><span className="dot"></span> Typ: {props.info.type}.</p>
              <p><span className="dot"></span> Ras: {props.info.race}.</p>
              <p><span className="dot"></span> Kön: {props.info.gender}.</p>
              <p><span className="dot"></span> Storlek: {props.info.size}.</p>
            </section>

            <section className="largeSection__two">
              <p><span className="dot"></span> Ålder: {props.info.age} år.</p>
              <p><span className="dot"></span> Finns i: {props.info.location}.</p>
              <p><span className="dot"></span> Funkar med: {props.info.WellWithSmall} {props.info.WellWithLarge} {props.info.WellWithCats} {props.info.WellWithDogs} {nothing}.</p>
              <p><span className="dot"></span> Aktivitetsnivå: {props.info.energy} av 10.</p>
            </section>
          </div>

          <p className="info__card__about">{props.info.desc}</p>

          {props.info.booked
            ? " "
            :
            <button onClick={props.switchToForm} className="adopt__btn">
            Adoptera mig!
            <img
              className="adopt__btn__logo" src="../src/assets/logo.png" alt=""/>
          </button>}

        </article>
      </div>
    </div>
  );
};

export default LargeInfo;
