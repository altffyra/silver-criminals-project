import React from "react";

type Props = {
  callToActionShow:any
  callToActionBoolean:boolean
};

const CallToAction = (props: Props) => {
  return (
    <div className="action__card">
      <div>
        <h1 className="action__text">
          Har du ett djur i behov av ett nytt hem?
        </h1>
      </div>

      <div className="action__inner__card">
        <h3 className="action__formula">
          {" "}
          Fyll i formuläret för att lägga upp för adoption
        </h3>
        <button onClick={()=>props.callToActionShow(!props.callToActionBoolean)} className="action__btn">
          Till formuläret{" "}
          <img
            className="action__btn__logo"
            src="../src/assets/logo.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
