import Button from "shared/UI/Button/Button";
import cls from "./VetPage.module.scss";
import { records } from "shared/mock data/records";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

const VetPage = () => {
  const dispatch = useAppDispatch();

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
          <Button>Принять</Button>
        </div>
      ))}
    </div>
  );
};

export default VetPage;
