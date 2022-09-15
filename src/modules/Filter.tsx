import React, { ChangeEvent, FormEvent, useRef } from "react";
import { Animalinterface, FilterInterface } from "../modules/interfaces";
import { SetStateAction, useState } from "react";
interface Props {
  info: Animalinterface[];
  update: (e:FormType)=> void;
}

type FormType = ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>;

// type FilterGenderType = "gender" | "race"
// const selectInputRef = useRef();
const Filter = (props: Props) => {
  function changeForm(e: FormType) {
    props.update(e);
  }



  return (
    <div className="outerFilterWrapper" id="search">

      <h2>Filtrera din sökning:</h2>
      <article className="filterSection">
        <aside className="left-form">
          <div>
            <p>Plats:</p>{" "}
            <div className="separator"></div>
            <input
              placeholder="Ange stad"
              type="text"
              name="location"
              onChange={(e) => changeForm(e)}
            ></input>
          </div>
          <div>
            <p>Typ:</p>{" "}
            <div className="separator"></div>
            <select name="type" onChange={(e) => changeForm(e)}>
              <option value="Any">Alla</option>
              <option value="Katt">Katt</option>
              <option value="Hund">Hund</option>
              <option value="Fågel">Fågel</option>
              <option value="Gnagare">Gnagare</option>
              <option value="Fisk">Fisk</option>
            </select>

          </div>
          <div>
            <p>Storlek:</p>
            <div className="separator"></div>
            <select name="size" onChange={(e) => changeForm(e)}>

              <option value="Any">Alla</option>
              <option value="Liten">Liten</option>
              <option value="Medium">Medium</option>
              <option value="Stor">Stor</option>
            </select>
          </div>
          <div>
            <p>Kön:</p>
            <div className="separator"></div>
            <select name="gender" onChange={(e) => changeForm(e)}>
              <option value="Any">Alla</option>
              <option value="Hane">Hane</option>
              <option value="Hona">Hona</option>
            </select>
          </div>
        </aside>

        <aside className="right-form">
          <div>
            <p>Bra med små barn?</p>
            <div className="separator"></div>
            <select name="WellWithSmall" onChange={(e) => changeForm(e)}>
              <option value="Any">Ingen Preferens</option>
              <option value="Små barn">Ja</option>
            </select>
          </div>
          <div>
            <p>Bra med stora barn?</p>
            <div className="separator"></div>
            <select name="WellWithLarge" onChange={(e) => changeForm(e)}>
              <option value="Any">Ingen Preferens</option>
              <option value="Stora barn">Ja</option>
            </select>
          </div>
          <div>
            <p>Bra med katter?</p>
            <div className="separator"></div>
            <select name="WellWithCats" onChange={(e) => changeForm(e)}>
              <option value="Any">Ingen Preferens</option>
              <option value="Katter">Ja</option>
            </select>
          </div>
          <div>
            <p>Bra med hundar?</p>
            <div className="separator"></div>
            <select name="WellWithDogs" onChange={(e) => changeForm(e)}>

              <option value="Any">Ingen Preferens</option>
              <option value="Hundar">Ja</option>
            </select>
          </div>

        </aside>
      </article>

      {/* BYT FUNKTION */}
      {/* <button
        className="filter-button-cancel"
        onClick={onClear}
      >
        Nollställ{" "}
        <img className="adopt__btn__logo" src="../src/assets/logo.png" alt="" />
      </button>
      <button className="filter-button">
        Sök!{" "}
        <img className="adopt__btn__logo" src="../src/assets/logo.png" alt="" />
      </button> */}
    </div>
  );
};

export default Filter;
