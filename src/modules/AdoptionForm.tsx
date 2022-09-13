import React from "react";
import { Animalinterface } from "./interfaces";

type Props = {
  showOverlay: () => void;
  switchToAdoption: () => void;
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
              <label className="adopt__input__lines">
                Din För- och efternamn:
                <input
                  name="userName"
                  className="adopt__input"
                  type="text"
                ></input>
              </label>

              <label className="adopt__input__lines">
                E-mail:
                <input
                  name="userEmail"
                  className="adopt__input"
                  type="text"
                ></input>
              </label>

              <label className="adopt__input__lines">
                Telefon nr:
                <input
                  name="userPhone"
                  className="adopt__input"
                  type="text"
                ></input>
              </label>
            </section>

            <section className="divider"></section>

            <label className="adopt__input__lines">
              Djurets namn:
              <input
                name="userPhone"
                className="adopt__input"
                type="text"
              ></input>
            </label>

            <label className="adopt__input__lines">
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
                    <option value="Pick" hidden>
                      Välj
                    </option>
                    <option value="Hane">Hane</option>
                    <option value="Hona">Hona</option>
                  </select>
                </label>

                <label className="adopt__animal">
                  Storlek:
                  <select className="options" name="size">
                    <option value="Pick" hidden>
                      Välj
                    </option>
                    <option value="Liten">Liten</option>
                    <option value="Medium">Medium</option>
                    <option value="Stor">Stor</option>
                  </select>
                </label>

                <label className="adopt__animal">
                  Typ:
                  <select className="options" name="type">
                    <option value="Pick" hidden>
                      Välj
                    </option>
                    <option value="Katt">Katt</option>
                    <option value="Hund">Hund</option>
                    <option value="Fågel">Fågel</option>
                    <option value="Gnagare">Gnagare</option>
                    <option value="Fisk">Fisk</option>
                  </select>
                </label>

                <label className="adopt__animal">
                  Ras
                  <select className="options" name="Race">
                    <option value="Pick" hidden>
                      Välj
                    </option>
                    <option value="option 1">01</option>
                    <option value="option 2">02</option>
                    <option value="option 3">03</option>
                    <option value="option 4">04</option>
                    <option value="option 5">05</option>
                    <option value="option 6">06</option>
                    <option value="option 7">07</option>
                  </select>
                </label>

                <label className="adopt__animal">
                  Energi:
                  <select className="options" name="Energy">
                    <option value="Pick" hidden>
                      Välj
                    </option>
                    <option value="option 1">01</option>
                    <option value="option 2">02</option>
                    <option value="option 3">03</option>
                    <option value="option 4">04</option>
                    <option value="option 5">05</option>
                    <option value="option 6">06</option>
                    <option value="option 7">07</option>
                  </select>
                </label>

                <label className="adopt__animal">
                  Ålder:
                  <select className="options" name="Old">
                    <option value="Pick" hidden>
                      Välj
                    </option>
                    <option value="option 1">01</option>
                    <option value="option 2">02</option>
                    <option value="option 3">03</option>
                    <option value="option 4">04</option>
                    <option value="option 5">05</option>
                    <option value="option 6">06</option>
                    <option value="option 7">07</option>
                  </select>
                </label>
              </section>

              <section>
                <label className="adopt__specs">
                  Bra med små barn:
                  <select className="options" name="WellWithSmall">
                    <option value="Pick" hidden>
                      Välj
                    </option>
                    <option value="Any">Ingen Preferens</option>
                    <option value="Små barn">Bra</option>
                  </select>
                </label>

                <label className="adopt__specs">
                  Bra med stora barn:
                  <select className="options" name="WellWithLarge">
                    <option value="Pick" hidden>
                      Välj
                    </option>
                    <option value="Any">Ingen Preferens</option>
                    <option value="Stora barn">Bra</option>
                  </select>
                </label>

                <label className="adopt__specs">
                  Bra med katter:
                  <select className="options" name="WellWithCats">
                    <option value="Pick" hidden>
                      Välj
                    </option>
                    <option value="Any">Ingen Preferens</option>
                    <option value="Katter">Bra</option>
                  </select>
                </label>

                <label className="adopt__specs">
                  Bra med hundar:
                  <select className="options" name="WellWithDogs">
                    <option value="Pick" hidden>
                      Välj
                    </option>
                    <option value="Any">Ingen Preferens</option>
                    <option value="Hundar">Bra</option>
                  </select>
                </label>
              </section>
            </section>

            <label className="adopt__about__animal">
              Lite om djuret:
              <textarea name="userPhone" className="adopt__about"></textarea>
            </label>
          </form>
          <button onClick={props.switchToAdoption} className="adopting__btn">
            Skicka anmälan
            <img
              className="adopting__btn__logo"
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
