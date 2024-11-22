import { records } from "shared/mock data/records";
import cls from "./RecordsList.module.scss";
import Button from "shared/UI/Button/Button";

const RecordsList = () => {
  return (
    <div className={cls.vetPage}>
      {records.map((item) => (
        <div className={cls.vetPage_card} key={item.id}>
          <div>
            <div>{item.type}</div>
            <div>Кличка: {item.name}</div>
            <div>Возраст: {item.age}</div>
            <div>Пол: {item.gender}</div>
            <div>Стериализован: {item.sterilized ? "Да" : "Нет"}</div>
            <div>Вакцинирован: {item.vaccinated ? "Да" : "Нет"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecordsList;
