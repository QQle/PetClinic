import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NearestEntry, RecordsActions, getVet } from "entities/Records";
import styles from "./Questions.module.scss";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { USER_LOCALSTORAGE_ID } from "shared/const/localStorage";
import { getPet } from "entities/PetsRegistered";
import toast from "react-hot-toast";
import { addRecord } from "entities/Records/model/service/addRecord";
import { getDataPetsByOwner } from "entities/User";

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
    return {
      text: "Нужен ветеринар-хирург или клиника с неотложной помощью. \nУ питомца серьезные симптомы, требуется срочная диагностика и интенсивная терапия.",
      vet: "Хирургия",
    };
  } else if (score >= 3) {
    return {
      text: "Подойдет терапевт для планового осмотра. \nСимптомы не критичные, но требуют диагностики и наблюдения.",
      vet: "Общая медицина",
    };
  } else {
    return {
      text: "Стоит проконсультироваться с ветеринаром общей практики перед визитом. \nСимптомы могут быть незначительными, но лучше убедиться.",
      vet: "Диагностика",
    };
  }
};

interface QuestionsProps {
  onClose: () => void;
}

const Questions = ({ onClose }: QuestionsProps) => {
  const dispatch = useAppDispatch();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<{ text: string; vet: string } | null>(
    null
  );
  const vet = useSelector(getVet);
  const petsData = useSelector(getDataPetsByOwner);
  const userID = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_ID) || "0");
  const lastPetId =
    petsData.length > 0 ? petsData[petsData.length - 1].id : null;
  const lastVet = vet.length > 0 ? vet[vet.length - 1] : null;
  useEffect(() => {
    return () => {
      setCurrentQuestion(0);
      setAnswers([]);
      setResult(null);
    };
  }, [onClose]);

  useEffect(() => {
    if (result) {
      dispatch(NearestEntry({ vet: result.vet }));
    }
  }, [result, dispatch]);

  const handleAnswer = (answer: string) => {
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResult(getResult(updatedAnswers));
    }
  };

  const addRecordVet = () => {
    if (!lastVet || !lastPetId) {
      toast.error("Не удалось получить данные о ветеринаре или питомце");
      return;
    }
    console.log(vet);

    const [day, month, year] = vet[0].nearestAvailableDate.split("-");
    const isoDate = `${year}-${month}-${day}T${vet[0].nearestAvailableTime}:00.000Z`;

    const addRecordData = {
      userId: userID,
      petId: lastPetId,
      veterinarianId: lastVet.veterinarianId,
      favorsId: lastVet.favor,
      dateOfAdmission: isoDate,
    };

    console.log(isoDate);

    dispatch(addRecord(addRecordData))
      .unwrap()
      .then(() => {
        toast.success("Запись успешна!");
        onClose();
      })
      .catch((error: any) => {
        toast.error(`Ошибка: ${error.message || "Неизвестная ошибка"}`);
      });
  };

  return (
    <div className={styles.questions}>
      {result ? (
        <div className={styles.result}>
          <h3 style={{ color: "black" }}>Результат</h3>
          <p style={{ color: "black" }}>{result.text}</p>

          {vet && vet.length > 0 && (
            <div className={styles.vetInfo} key={vet[0].veterinarianId}>
              <h4 style={{ color: "black" }}>Подходящий ветеринар</h4>
              <p style={{ color: "black" }}>
                {vet[0].veterinarianName} ({vet[0].specialization})
              </p>
              <p style={{ color: "black" }}>
                Ближайшее время записи: {vet[0].nearestAvailableDate}{" "}
                {vet[0].nearestAvailableTime}
              </p>
              <button onClick={addRecordVet} className={styles.agreButton}>
                Если хотите записаться сейчас, нажмите сюда
              </button>
            </div>
          )}
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
