import React from "react";
import { Animalinterface } from "../modules/interfaces";
type Props = {
  info: Animalinterface;
};

const LargeInfo = (props: Props) => {
  console.log(props.info);
  return (
    <div className="blurr-div">
      <div className="info__card">
        <div className="img__close">
          <button className="close">x</button>
          <img className="info__img" src={props.info.picture}></img>
        </div>

        <article className="info__text">
          <h1 className="info__name">{props.info.name}</h1>

          <div className="info__card__specs__one">
            <p>Ras: {props.info.race}</p>
            <p>Typ: {props.info.type}</p>
            <p>Storlek: {props.info.size}</p>
          </div>

          <div className="info__card__specs__two">
            <p>Plats: {props.info.location}</p>
            <p>Ålder: {props.info.age}</p>
            <p>Energi-nivå: {props.info.energy}</p>
          </div>

          <p className="info__card__about">
            Lorem ipsum dolor sit amet. Ex blanditiis voluptatem et maxime
            reprehenderit ea molestiae culpa quo velit voluptates ea possimus
            aspernatur! Sed expedita quia quo itaque saepe sit dolore similique
            aut illo atque est ducimus impedit. Et rerum dolorum internos
            molestias et quae doloribus non voluptas inventore aut aspernatur
            explicabo. Sed illum velit qui fuga fugit non facilis tempore in
            natus aliquid. Aut molestias molestiae a veritatis consequatur ab
            nostrum omnis et repellat doloremque sit Quis eaque qui dolorum
            necessitatibus sit ullam amet.
          </p>

          <button className="adopt__btn">
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
