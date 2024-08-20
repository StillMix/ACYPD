import React from "react";
import { NavLink} from "react-router-dom";
import "./NavLinkMenu.css";

import LogoWhite from "../../images/logoW.svg";

import Out from "../../images/out.svg";

function NavLinkMenu(props) {
  return (
    <div className="NavLinkMenu">
      <div className="NavLinkMenu__logoContainer">
        <img className="NavLinkMenu__logo" alt="sdd" src={LogoWhite} />
      </div>
      <div className="NavLinkMenu__linksContainer">
        <p className="NavLinkMenu_linksContainer_title">Меню</p>
        <nav className="NavLinkMenu_links">
          <NavLink to="/main" className="NavLinkMenu__link">
            Главная
          </NavLink>
          <NavLink to="/quiz" className="NavLinkMenu__link">
            Тест
          </NavLink>
          <NavLink to="/practice" className="NavLinkMenu__link">
            Практика
          </NavLink>
        </nav>
      </div>
      <div className="NavLinkMenu__settingsContainer">
        <button
          className="NavLinkMenu__settingsContainer_btn"
          onClick={() => props.back() }
        >
          <img alt="ssd" src={Out} />
          Завершить сеанс
        </button>
      </div>
    </div>
  );
}

export default NavLinkMenu;
