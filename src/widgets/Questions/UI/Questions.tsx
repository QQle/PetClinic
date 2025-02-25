import { useState, useEffect } from "react";
import styles from "./Questions.module.scss";

interface Question {
  id: number;
  question: string;
  answers: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question:
      "У вашего питомца высокая температура, рвота, понос или сильная слабость?",
    answers: ["Да", "Нет"],
  },
  {
    id: 2,
    question: "Животное перестало есть или пить в течение последних 24 часов?",
    answers: ["Да", "Нет"],
  },
  {
    id: 3,
    question: "Вы заметили кровь в моче, кале или рвоте у питомца?",
    answers: ["Да", "Нет"],
  },
  {
    id: 4,
    question:
      "Ваш питомец ведет себя необычно: стал агрессивным, вялым или слишком беспокойным?",
    answers: ["Да", "Нет"],
  },
  {
    id: 5,
    question: "Вы видите у питомца затрудненное дыхание или сильный кашель?",
    answers: ["Да", "Нет"],
  },
  {
    id: 6,
    question: "У животного появились судороги или проблемы с координацией?",
    answers: ["Да", "Нет"],
  },
  {
    id: 7,
    question:
      "Питомец постоянно чешется, вы заметили покраснения, высыпания или выпадение шерсти?",
    answers: ["Да", "Нет"],
  },
  {
    id: 8,
    question:
      "У животного есть хронические заболевания, и его состояние ухудшилось?",
    answers: ["Да", "Нет"],
  },
  {
    id: 9,
    question:
      "Вы недавно сменили корм или питомец мог съесть что-то запрещенное?",
    answers: ["Да", "Нет"],
  },
  {
    id: 10,
    question:
      "Симптомы у вашего питомца появились резко или нарастают со временем?",
    answers: ["Резко", "Постепенно"],
  },
];

const getResult = (answers: string[]) => {
  const score = answers.reduce(
    (acc, ans) => acc + (ans === "Да" || ans === "Резко" ? 1 : 0),
    0
  );

  if (score >= 7) {
    return "Нужен ветеринар-реаниматолог или клиника с неотложной помощью. \nУ питомца серьезные симптомы, требуется срочная диагностика и интенсивная терапия.";
  } else if (score >= 3) {
    return "Подойдет терапевт для планового осмотра. \nСимптомы не критичные, но требуют диагностики и наблюдения.";
  } else {
    return "Стоит проконсультироваться с ветеринаром общей практики перед визитом. \nСимптомы могут быть незначительными, но лучше убедиться.";
  }
};

interface QuestionsProps {
  onClose: () => void;
}

const Questions = ({ onClose }: QuestionsProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      setCurrentQuestion(0);
      setAnswers([]);
      setResult(null);
    };
  }, [onClose]);

  const handleAnswer = (answer: string) => {
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResult(getResult(updatedAnswers));
    }
  };

  return (
    <div className={styles.questions}>
      {result ? (
        <div className={styles.result}>
          <h3 style={{ color: "black" }}>Результат</h3>
          <p style={{ color: "black" }}>{result}</p>
        </div>
      ) : (
        <div className={styles.survey}>
          <h3 className={styles.question}>
            {questions[currentQuestion].question}
          </h3>
          <div className={styles.answers}>
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                className={styles.answerButton}
                onClick={() => handleAnswer(answer)}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;
