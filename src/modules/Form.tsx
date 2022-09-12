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
      <div className="form__close">
        <button onClick={props.switchToForm} className="close">
          x
        </button>

        <article className="form__card">
          <h1 className="form__name">Intresseanmälan {props.info.name}</h1>

          <form className="form">
            <div>
              <label>
                För- och efternamn:{" "}
                <div className="separator"></div>
                <input className="form__input" type="text"></input>{" "}
              </label>
            </div>
            <div>
              <label>
                E-mail: 
                <div className="separator"></div>
                <input className="form__input" type="text"></input>
              </label>
            </div>
            <div>
              <label>
                Telefon nr:
                <div className="separator"></div>
                <input className="form__input" type="text"></input>
              </label>
            </div>



          </form>

          <p className="info__card__about">
            Disclaimer: Rescue Rabbits behöver behandla dina personuppgifter
            enligt ovan för att kunna ta ställning till din intresseanmälan och
            för att kunna kontakta dig för att gå vidare i processen. Rescue Rabbit
            delar inte någon av dina personuppgifter till tredje part
            utöver det du godkänner nedan, och du har när som helst rätt att
            återkalla ditt samtycke. Du är välkommen att kontakta oss på
            info@rescuerabbits.se om du har några frågor. Jag godkänner Rescue
            Rabbits behandling av mina personuppgifter enligt ovan.
            <br />
            Jag har läst och förstått villkoren och integritetspolicyn. <input type="checkbox" name="" id="" />
          </p> 

          <button className="send__btn" onClick={props.adoptConfirmed}>
            Skicka intresseanmälan
            <img
              className="send__btn__logo"
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
