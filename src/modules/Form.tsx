import React from "react";
import { Animalinterface } from "./interfaces";

type Props = {
  info: Animalinterface;
  switchToForm: any;
  adoptConfirmed: any;
};

const Form = (props: Props) => {
  return (
    <div className="blurr-div">
      <div className="info__card">
        <div className="img__close">
          <button onClick={props.switchToForm} className="close">
            x
          </button>
        </div>
        <h1>Intresse Anmälan {props.info.name}</h1>
        <article className="info__text">
          <div className="info__card__specs__one"></div>

          <p className="info__card__about">
            Disclaimer: Hundar Utan Hem behöver behandla dina personuppgifter
            enligt ovan för att kunna ta ställning till din intresseanmälan och
            för att kunna kontakta dig för att gå vidare i processen. Hundar
            Utan Hem delar inte någon av dina personuppgifter till tredje part
            utöver det du godkänner nedan, och du har när som helst rätt att
            återkalla ditt samtycke. Du är välkommen att kontakta oss på
            info@hundarutanhem.se om du har några frågor. Jag godkänner Hundar
            Utan Hems behandling av mina personuppgifter enligt ovan. Jag har
            läst och förstått villkoren och integritetspolicyn.
          </p>

          <button className="adopt__btn" onClick={props.adoptConfirmed}>
            Skicka intresseanmälan
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

export default Form;
