import React, { useState } from "react";
import "./itog.css";
import NavLinkMenu from "../NavLinkMenu/NavLinkMenu";

function Itog(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState([]);
  const [cel, setCel] = useState("");
  const [zadach, setZadach] = useState("");

  const practices = [
    {
      name: "Итоговое проектное задание",
      zadan: [
        "Образование: Создание системы управления обучением (LMS) с использованием технологий Open Source.",
        "Медицина: Разработка приложения для управления медицинскими записями или мониторинга здоровья пациентов.",
        "Финансы: Создание платформы для личного или малого бизнеса бухгалтерии.",
        "Экология: Разработка инструмента для мониторинга экологических показателей.",
        "Интернет вещей (IoT): Разработка системы управления умным домом или промышленным оборудованием.",
      ],
      cel: "разработка программного решения для выбранной предметной области с последующим созданием собственного репозитория в GitVerse (условно назовём его OpenScaler)",
      zadach: "разработать проект, опубликовать его в репозитории OpenScaler на GitVerse, организовать документацию и автоматизацию CI/CD процессов, пригласить коллег для ревью и совместной работы над проектом."
    },

  ];

  return (
    <div className="itogBody">
      <NavLinkMenu back={props.back}/>
      <div className="itog">
        <div className="itog__container">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="main__container__teach"
              onClick={() => {
                setName(practice.name);
                setText(practice.zadan);
                setCel(practice.cel);
                setZadach(practice.zadach)
                setOpen(true);
              }}
            >
               {practice.name}
            </div>
          ))}
        </div>
      </div>
      {open && (
        <div className="main__teach">
          <div className="main__teach__bck"></div>
          <div className="main__teach__bck__popup">
            <p className="main__teach__bck__popup__title">{name}</p>
            <div className="main__teach__bck__popup__text">
            {
              cel && <p><strong>Задание:</strong> {cel}</p>
             } 
                           {
              cel && <p>Предметные области для выбора:</p>
             } 
              <ul>
                { text && text.map((task, index) => (
                  <li key={index}>{index + 1}: {task}</li>
                ))}
              </ul>
              {
              cel && <p><strong>Задача:</strong> {zadach}</p>
             } 
            </div>
            <button
              onClick={() => setOpen(false)}
              className="main__teach__bck__popup__btn"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Itog;
