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



            <section className="adopt__user">
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
            </section>

            <section className="divider"></section>

            
            <label>
              Djurets namn:
              <input
                name="userPhone"
                className="adopt__input"
                type="text"
              ></input>
            </label>

            <label>
            Plats:
              <input className="adopt__input" name="Location"></input>
            </label>

            <section className="adopt__wrapper">
            <section className="adopt__img">
              <img src="" alt="" />
            </section>

            <section>
              <label className="adopt__animal">
              kön:
                <select className="options" name="gender">
                  <option value="Any">Alla</option>
                  <option value="Hane">Hane</option>
                  <option value="Hona">Hona</option>
                </select>
              </label>

              <label className="adopt__animal">
              Storlek:
                <select className="options" name="size">
                  <option value="alla">Alla</option>
                  <option value="Liten">Liten</option>
                  <option value="Medium">Medium</option>
                  <option value="Stor">Stor</option>
                </select>
              </label>

              <label className="adopt__animal">
              Typ:
                <select className="options" name="type">
                  <option value="Any">Alla</option>
                  <option value="Katt">Katt</option>
                  <option value="Hund">Hund</option>
                  <option value="other">Annat</option>
                </select>
              </label>

              <label className="adopt__animal">
              Ras
                <select className="options" name="Race">
                  <option value="Any">Alla</option>
                  <option value="option 2">2</option>
                </select>
              </label>

              <label className="adopt__animal">
              Energi:
                <select className="options" name="Energy">
                <option value="Any">Alla</option>
                  <option value="option 2">2</option>
                </select>
              </label>

              <label className="adopt__animal">
              Ålder:
                <select className="options" name="Old">
                <option value="Any">Alla</option>
                  <option value="option 2">2</option>
                </select>
              </label>
            </section>

            <section>
              <label  className="adopt__specs">
              Bra med små barn:
                <select className="options" name="WellWithSmall">
                  <option value="Any">Ingen Preferens</option>
                  <option value="Små barn">Bra</option>
                </select>
              </label>

              <label className="adopt__specs">
              Bra med stora barn:
                <select className="options" name="WellWithLarge">
                  <option value="Any">Ingen Preferens</option>
                  <option value="Stora barn">Bra</option>
                </select>
              </label>

              <label className="adopt__specs">
              Bra med katter:
                <select className="options" name="WellWithCats">
                  <option value="Any">Ingen Preferens</option>
                  <option value="Katter">Bra</option>
                </select>
              </label>

              <label className="adopt__specs">
              Bra med hundar:
                <select className="options" name="WellWithDogs">
                  <option value="Any">Ingen Preferens</option>
                  <option value="Hundar">Bra</option>
                </select>
              </label>
            </section>
            </section>


            <label>
              Lite om djuret:
              <input
                name="userPhone"
                className="adopt__about"
                type="text"
              ></input>
            </label>

            <button onClick={props.switchToAdoption} className="adopt__btn">
            skicka!
            <img
              className="adopt__btn__logo"
              src="../src/assets/logo.png"
              alt=""
            />
          </button>
          </form>


        </article>
      </div>
    </div>
  );
};

export default AdoptionForm;
