import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Login.css";
import LogoW from "../../images/logoW.svg";

function Login(props) {
  const [formValues, setFormValues] = useState({});
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.handleSubmit(formValues);
  }

  return (
    <div className="loginBody">
      <div className="loginPopup">
        <div className="loginPopup__container">
          <div className="loginPopup__containerLogo">
            <img src={LogoW} alt="ss" className="loginPopup__logo" />
          </div>

          <div className="loginPopup__inputs">
            <p className="loginPopup__inputs__title">ДОБРО ПОЖАЛОВАТЬ</p>
            <p className="loginPopup__inputs__subtitle">
              ВОЙДИТЕ В СВОЙ АККАУНТ
            </p>
             <form onSubmit={handleSubmit}>
             <input
              id="profile-email-input"
              value={formValues.EmailInput}
              onChange={handleChange}
              name="EmailInput"
              required
              placeholder="Логин"
              className="loginPopup_inputs_login input"
            />
            <input
              id="profile-password-input"
              type="password"
              value={formValues.PasswordInput}
              onChange={handleChange}
              name="PasswordInput"
              required
              placeholder="Пароль"
              className="loginPopup_inputs_password input"
            />

            <button
              className="loginPopup__btn"
              type="submit"
            >
              Войти в систему
              </button>
              <button className="loginPopup__btn__reg" type="button" onClick={() => {
                    navigate('/register')
                  }}>Зарегистрироваться</button>
             </form>
              
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
