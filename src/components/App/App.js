import React, { useCallback } from "react";
import { Routes, Route, useNavigate, useLocation  } from "react-router-dom"; 
import "./App.css";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Register from "../Register/Register.js";
import { mestoAuth } from "../utils/Auth";
import api from "../utils/Api.js";
import Quiz from "../Quiz/Quiz.js";
import Practice from "../Practice/Practice.js";

function App(props) {
  const navigate = useNavigate();
  const location = useLocation();


  function backUser() {
    api
      .backUser()
      .then((data) => {
        localStorage.removeItem("jwt");
        console.log(data);
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  }



  const tokenCheck = useCallback(() => {
    if (localStorage.getItem("jwt")) {
      mestoAuth
        .getContent()
        .then((res) => {
          if (res.message === "Необходима авторизация") {
            console.log(res);
          } else {
            if (location.pathname === "/" ) {
              navigate('/main');
            }
           
                }

          
        })
        .catch((err) => console.log(err));
    }
  }, [navigate, location]);

  function login(log) {
    if (!log) {
      return;
    }

    mestoAuth
      .authorize(log.PasswordInput, log.EmailInput)
      .then((data) => {
        if (data.message === "Неправильные почта или пароль") {
          console.log(data);
        } else {
          localStorage.setItem("jwt", log.EmailInput);
          tokenCheck();
        }
      })
      .catch((err) => console.log(err));
  }


  function register(log) {
    if (!log) {
      return;
    }

    mestoAuth
      .register(log.PasswordInput, log.EmailInput)
      .then((data) => {
        if (data.message === "Неправильные почта или пароль") {
          console.log(data);
        } else {
         navigate('/')
        }
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login handleSubmit={login}  back={backUser} />} />
        <Route path="/main" element={<Main back={backUser} />} />
        <Route path="/register" element={<Register handleSubmit={register} back={backUser} />} />
        <Route path="/quiz" element={<Quiz  back={backUser} />} />
        <Route path="/practice" element={<Practice back={backUser} />} />
      </Routes>
    </div>
  );
}

export default App;
