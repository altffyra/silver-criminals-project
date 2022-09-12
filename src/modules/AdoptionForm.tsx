<<<<<<< Updated upstream
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

      <div className="form__close">
        <button onClick={props.showOverlay} className="close"> x </button>
      </div>

      <button onClick={props.switchToAdoption} className="adopt__btn">
            skicka!
            <img
              className="adopt__btn__logo"
              src="../src/assets/logo.png"
              alt=""
            />
          </button>


    </div>
  );
};

export default AdoptionForm;
=======
import React from 'react'

type Props = {
   
}

const AdoptionForm = (props: Props) => {
  return (
    <div>AdoptionForm</div>
  )
}

export default AdoptionForm
>>>>>>> Stashed changes
