import React from "react";
import { Animalinterface } from "../modules/interfaces";

type Props = {
  info: Animalinterface;
  showOverlay: any;
  switchToForm: any;
};


const LargeInfo = (props: Props) => {
  const bookedLarge: string = props.info.booked
    ? "frame bookedStampLarge"
    : "frame";

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
              <p>Typ: {props.info.type}.</p>
              <p>Ras: {props.info.race}.</p>
              <p>Kön: {props.info.gender}.</p>
              <p>Storlek: {props.info.size}.</p>
            </section>

            <section className="largeSection__two">
              <p>Ålder: {props.info.age} år.</p>
              <p>Finns i: {props.info.location}.</p>
              <p>Funkar med: {props.info.WellWith}.</p>
              <p>Aktivitetsnivå: {props.info.energy} av 10.</p>
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
