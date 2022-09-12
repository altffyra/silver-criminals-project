import React, { ChangeEvent, FormEvent, useRef } from "react";
import { Animalinterface, FilterInterface } from "../modules/interfaces";
import { SetStateAction, useState } from "react";
interface Props {
  info: Animalinterface[];
  update: any;
  filter: FilterInterface | any;
  setFilter: any;
  cancelFilter: any;
}

type FormType = ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>;

// type FilterGenderType = "gender" | "race"
// const selectInputRef = useRef();
const Filter = (props: Props) => {
  function changeForm(e: FormType) {
    props.update(e);
  }

  const onClear = () => {
    // selectInputRef.current.select.clearValue();
    props.cancelFilter
  };


  return (
    <div className="outerFilterWrapper" id="search">
      <h2>Sök efter:</h2>
      <div className="filterWrapper">
        <div className="left-form">
          <p>Plats</p>{" "}
          <input
            type="text"
            name="Location"
            onChange={(e) => changeForm(e)}
          ></input>
          <div className="searchForms">
            <p>Gender</p>
            <select  name="gender" onChange={(e) => changeForm(e)}>
              <option value="Any">Alla</option>
              <option value="Hane">Hane</option>
              <option value="Hona">Hona</option>
            </select>
            <p>Storlek</p>
            <select  name="size" onChange={(e) => changeForm(e)}>
              <option value="Any">Alla</option>
              <option value="Liten">Liten</option>
              <option value="Medium">Medium</option>
              <option value="Stor">Stor</option>
            </select>
            <p>Typ</p>{" "}
            <select name="type" onChange={(e) => changeForm(e)}>
              <option value="Any">Alla</option>
              <option value="Katt">Katt</option>
              <option value="Hund">Hund</option>
              <option value="other">Annat</option>
            </select>
          </div>
          <div className="right-form">
            <p>Bra med små barn</p>
            <select name="WellWithSmall" onChange={(e) => changeForm(e)}>
              <option value="Any">Ingen Preferens</option>
              <option value="Små barn">Bra</option>
            </select>
            <p>Bra med stora barn</p>
            <select name="WellWithLarge" onChange={(e) => changeForm(e)}>
              <option value="Any">Ingen Preferens</option>
              <option value="Stora barn">Bra</option>
            </select>
            <p>Bra med katter</p>
            <select name="WellWithCats" onChange={(e) => changeForm(e)}>
              <option value="Any">Ingen Preferens</option>
              <option value="Katter">Bra</option>
            </select>
            <p>Bra med hundar</p>
            <select name="WellWithDogs" onChange={(e) => changeForm(e)}>
              <option value="Any">Ingen Preferens</option>
              <option value="Hundar">Bra</option>
            </select>
          </div>
        </div>
      </div>
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
