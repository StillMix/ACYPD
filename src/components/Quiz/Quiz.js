import React, { useState } from "react";
import "./Quiz.css";
import NavLinkMenu from "../NavLinkMenu/NavLinkMenu";
const questions = [
  {
    question: "Что такое Open Source?",
    options: [
      "Программное обеспечение с открытым исходным кодом, доступным для всех.",
      "Программное обеспечение, распространяемое бесплатно, но с закрытым исходным кодом.",
      "Программное обеспечение, доступное только для учебных целей."
    ],
    answer: 0
  },
  {
    question: "Какое из перечисленных преимуществ характерно для Open Source проектов?",
    options: [
      "Возможность изменять и распространять код.",
      "Код защищён от изменений и закрыт для всех.",
      "Нет необходимости соблюдать лицензию."
    ],
    answer: 0
  },
  {
    question: "Какая лицензия является Open Source?",
    options: ["MIT", "Windows EULA", "Adobe License"],
    answer: 0
  },
  {
    question: "Какой из этих проектов является Open Source?",
    options: ["Microsoft Office", "Linux", "Photoshop"],
    answer: 1
  },
  {
    question: "Кто может вносить вклад в Open Source проект?",
    options: [
      "Только автор оригинального кода.",
      "Любой пользователь с доступом к проекту.",
      "Только зарегистрированные компании."
    ],
    answer: 1
  }
];

function Quiz(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (index) => {
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quizBody">
    <NavLinkMenu back={props.back}/>
    <div className="quiz">
        <div className="quiz__popup">
        {showScore ? (
        <div className="score-section">
          Вы ответили правильно на {score} из {questions.length} вопросов.
        </div>
      ) : (
        <div>
            <div className="question-count">
              <span>Вопрос {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(index)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
        </div>

    </div>
    </div>

  );
}

export default Quiz;
