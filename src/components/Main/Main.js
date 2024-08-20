import React, { useState } from "react";
import "./Main.css";
import hi from "../../images/hi.svg";
import NavLinkMenu from "../NavLinkMenu/NavLinkMenu";
import { teach } from "../initialCard";

function Main(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  return (
    <div className="mainBody">
      <NavLinkMenu back={props.back}/>
      <div className="main">
        <p className="main__title">
          <img src={hi} alt="Welcome" />
          Добро пожаловать!
        </p>
        <div className="main__container">
          {teach.map((i) => {
            return (
              <div key={i.id}
                className="main__container__teach"
                onClick={() => {
                  setName(i.name);
                  setText(i.teach);
                  setOpen(true);
                }}
              >
                {i.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${open ? "main__teach" : "disable"}`}>
        <div className="main__teach__bck"></div>
        <div className="main__teach__bck__popup">
          <p className="main__teach__bck__popup__title">{name}</p>
          <p className="main__teach__bck__popup__text">{text}</p>
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="main__teach__bck__popup__btn"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
