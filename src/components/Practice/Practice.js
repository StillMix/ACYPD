import React, { useState } from "react";
import "./Practice.css";
import NavLinkMenu from "../NavLinkMenu/NavLinkMenu";

function Practice(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState([]);
  const [cel, setCel] = useState("");

  const practices = [
    {
      name: "Исследование популярных Open Source проектов",
      zadan: [
        "Найдите три популярных Open Source проекта на GitHub (например, Linux Kernel, React, TensorFlow).",
        "Исследуйте структуру репозиториев, изучите README файлы и ознакомьтесь с историей коммитов.",
        "Определите, какие лицензии используются в этих проектах, и объясните, что они означают для разработчиков и пользователей.",
      ],
      cel: "Понять, как организованы Open Source проекты, и какие лицензии используются.",
    },
    {
      name: "Внесение вклада в Open Source проект",
      zadan: [
        "Найдите Open Source проект, который вам интересен (это может быть что-то простое, например, проект по документации).",
        "Форкните репозиторий на свой аккаунт.",
        "Найдите небольшую проблему или улучшение (например, исправление опечатки в документации).",
        "Внесите изменения и создайте Pull Request (PR) в основной репозиторий.",
      ],
      cel: "Изучить процесс взаимодействия с Open Source проектами, включая работу с форками, коммитами и PR.",
    },
    {
      name: "Создание собственного Open Source проекта",
      zadan: [
        "Создайте свой проект на GitHub, выберите тему, которая вам интересна (это может быть утилита, библиотека или даже шаблон веб-страницы).",
        "Настройте репозиторий: добавьте README файл с описанием проекта, лицензию (например, MIT) и примеры использования.",
        "Сделайте ваш проект публичным и пригласите других разработчиков к участию.",
      ],
      cel: "Пройти полный цикл создания Open Source проекта, от его инициализации до публикации.",
    },
    {
      name: "Анализ лицензионных условий",
      zadan: [
        "Изучите несколько популярных лицензий Open Source (MIT, GPL, Apache License).",
        "Сравните их и опишите основные различия между ними (например, как они влияют на коммерческое использование или модификацию кода).",
        "Определите, какая лицензия лучше всего подходит для различных типов проектов.",
      ],
      cel: "Понять важность выбора лицензии и ее влияние на проект.",
    },
    {
      name: "Участие в обсуждениях и разработке Open Source проектов",
      zadan: [
        "Найдите активное обсуждение или issue в Open Source проекте на GitHub.",
        "Примите участие в обсуждении: предложите решение, задайте вопрос или дайте совет.",
        "Если у вас есть опыт в данной области, предложите Pull Request для решения проблемы.",
      ],
      cel: "Улучшить навыки общения и участия в команде разработчиков, работающих над Open Source проектом.",
    },
    {
      name: "Работа с автоматизированной системой анализа типа нагрузки и оптимизации производительности сервера на основе AI моделей A-Tune",
      zadan: "",
      cel: "",
    },
    {
      name: "Работа с системой исправления уязвимостей SysCare",
      zadan: "",
      cel: "",
    },
    {
      name: "Освоение технологий контейнер-ной виртуализации Kmesh, k8s, iSula, Kata-containers",
      zadan: "",
      cel: "",
    },
    {
      name: "Работа с системой виртуализации StratoVirt",
      zadan: "",
      cel: "",
    },
    {
      name: "Работа с системой контейнерной виртуализации iSula",
      zadan: "",
      cel: "",
    },
    {
      name: "Работа с системой обнаружения вторжений SecDetector",
      zadan: "",
      cel: "",
    },
    {
      name: "Работа с системой инициализации SysMaster",
      zadan: "",
      cel: "",
    },
    {
      name: "Отработка навыков работы с диспетчером устройств DevMaster",
      zadan: "",
      cel: "",
    },
    {
      name: "Портирование/сборка собственных программных решений и создание собственного репозитория программных решений OpenScaler",
      zadan: "",
      cel: "",
    },
  ];

  return (
    <div className="practiceBody">
      <NavLinkMenu back={props.back}/>
      <div className="practice">
        <div className="practice__container">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="main__container__teach"
              onClick={() => {
                setName(practice.name);
                setText(practice.zadan);
                setCel(practice.cel);
                setOpen(true);
              }}
            >
              Практика {index + 1}: {practice.name}
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
              <ul>
                { text && text.map((task, index) => (
                  <li key={index}>{index + 1}: {task}</li>
                ))}
              </ul>
             {
              cel && <p><strong>Цель:</strong> {cel}</p>
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

export default Practice;
