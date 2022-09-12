import React from "react";
import { Animalinterface } from "./interfaces";

type Props = {
  info: Animalinterface;
  showOverlay: any;
  switchToAdoption: any;
};

const AdoptionForm = (props: Props) => {
  return (
    <div className="blurr-div">
      <div className="adopt__close">
        <button onClick={props.showOverlay} className="close">
          x
        </button>

        <article className="adopt__card">
          <form className="adopt__form">
            <label>
              Din För- och efternamn:
              <input
                name="userName"
                className="adopt__input"
                type="text"
              ></input>
            </label>

            <label>
              E-mail:
              <input
                name="userEmail"
                className="adopt__input"
                type="text"
              ></input>
            </label>

            <label>
              Telefon nr:
              <input
                name="userPhone"
                className="adopt__input"
                type="text"
              ></input>
            </label>

            <label>
              Djurets namn:
              <input
                name="userPhone"
                className="adopt__input"
                type="text"
              ></input>
            </label>

            <label>
              kön:
              <select name="gender" onChange={(e) => changeForm(e)}>
                <option value="Any">Alla</option>
                <option value="Hane">Hane</option>
                <option value="Hona">Hona</option>
              </select>
            </label>

            <label>
            Storlek:
              <select name="size" onChange={(e) => changeForm(e)}>
                <option value="alla">Alla</option>
                <option value="Liten">Liten</option>
                <option value="Medium">Medium</option>
                <option value="Stor">Stor</option>
              </select>
            </label>

            <label>
            Typ:
              <select name="type" onChange={(e) => changeForm(e)}>
                <option value="Any">Alla</option>
                <option value="Katt">Katt</option>
                <option value="Hund">Hund</option>
                <option value="other">Annat</option>
              </select>
            </label>

            <label>
            Bra med små barn:
              <select name="WellWithSmall" onChange={(e) => changeForm(e)}>
                <option value="Any">Ingen Preferens</option>
                <option value="Små barn">Bra</option>
              </select>
            </label>

            <label>
            Bra med stora barn:
              <select name="WellWithLarge" onChange={(e) => changeForm(e)}>
                <option value="Any">Ingen Preferens</option>
                <option value="Stora barn">Bra</option>
              </select>
            </label>

            <label>
            Bra med katter:
              <select name="WellWithCats" onChange={(e) => changeForm(e)}>
                <option value="Any">Ingen Preferens</option>
                <option value="Katter">Bra</option>
              </select>
            </label>

            <label>
            Bra med hundar:
              <select name="WellWithDogs" onChange={(e) => changeForm(e)}>
                <option value="Any">Ingen Preferens</option>
                <option value="Hundar">Bra</option>
              </select>
            </label>

            <label>
            Plats:
              <input name="Location" onChange={(e) => changeForm(e)}></input>
            </label>










            <label>
              Lite om djuret:
              <input
                name="userPhone"
                className="adopt__about"
                type="text"
              ></input>
            </label>
          </form>

          <button onClick={props.switchToAdoption} className="adopt__btn">
            skicka!
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

export default AdoptionForm;
