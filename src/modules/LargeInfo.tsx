import React from "react";
import { Animalinterface } from "../modules/interfaces";

type Props = {
    info:Animalinterface;
    showOverlay: any;
    switchToForm:any;

}

const LargeInfo = (props: Props) => {


  return (
    <div className="blurr-div">
      <div className="info__card">
        <div className="img__close">
          <button onClick={props.showOverlay} className="close">x</button>
          <img className="info__img" src={props.info.picture}></img>
        </div>

        <article className="info__text">
          <h1 className="info__name">{props.info.name}</h1>

          <div className="info__card__specs__one">
            <p>Ras: {props.info.race}.</p>
            <p>Typ: {props.info.type}.</p>
            <p>Storlek: {props.info.size}.</p>
          </div>

          <div className="info__card__specs__two">
            <p>Plats: {props.info.location}.</p>
            <p>Ålder: {props.info.age} år.</p>
            <p>Aktivitetsnivå: {props.info.energy} av 10.</p>
          </div>

          <p className="info__card__about">
            {props.info.desc}
          </p>

          <button onClick={props.switchToForm} className="adopt__btn">
            Adoptera mig!
            <img
              className="adopt__btn__logo"
              src="../src/assets/logo.png"
              alt=""
            />
          </button>
        </article>
      </div>
    </div>
  );
};

export default LargeInfo;
