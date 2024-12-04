import Button from "shared/UI/Button/Button";
import cls from "./VetPage.module.scss";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getRecordsByVet, getRecordsByVetS, postRecords } from "entities/Vet";
import { useEffect } from "react";
import { USER_LOCALSTORAGE_ID } from "shared/const/localStorage";

const VetPage = () => {
  const dispatch = useAppDispatch();
  const records = useSelector(getRecordsByVetS);
  const userID = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_ID) || "0");

  useEffect(() => {
    dispatch(getRecordsByVet(userID));
  }, [dispatch, userID]);

  const handleAccept = (id: string) => {
    dispatch(postRecords(id));
  };

  if (!records.length) {
    return (
      <div className={cls.vetPage}>
        <div className={cls.vetPage_empty}>Записей не найдено</div>
      </div>
    );
  }

  return (
    <div className={cls.vetPage}>
      {records.map((item) => (
        <div className={cls.vetPage_card} key={item.bidId}>
          <div>
            <div>Тип: {item.type}</div>
            <div>Имя клиента: {item.clientName}</div>
            <div>Услуга: {item.favorName}</div>
            <div>Имя питомца: {item.petName}</div>
            <div>Возраст: {item.age}</div>
            <div>Пол: {item.gender}</div>
            <div>Стериализован: {item.sterilized ? "Да" : "Нет"}</div>
            <div>Вакцинирован: {item.vaccinated ? "Да" : "Нет"}</div>
          </div>
          {!item.isAccept ? (
            <Button onClick={() => handleAccept(item.bidId)}>Принять</Button>
          ) : (
            <Button className={cls.acceptBtn}>Принята</Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default VetPage;
