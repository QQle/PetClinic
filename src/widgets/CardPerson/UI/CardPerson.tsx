import Button from "shared/UI/Button/Button";
import style from "./CardPerson.module.scss";
import Modal from "shared/UI/Modal/Modal";
import { SignUpForms } from "widgets/SignupForms";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { Veterinarian } from "entities/ServiceVet/model/type/type";

interface CardPersonProps {
  isAuth: boolean;
  persons: Veterinarian[];
}

const CardPerson: FC<CardPersonProps> = ({ persons, isAuth }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    if (isAuth) {
      setVisible(true);
    } else {
      toast("Вам надо зайти в свой аккаунт!");
    }
  };
  return (
    <>
      {!persons.length ? (
        <div>Нет данных!</div>
      ) : (
        <div className={style.cardLoyut}>
          {persons.map((item) => (
            <div className={style.card} key={item.id}>
              <img src={item.img} className={style.cardPhoto} alt={item.name} />
              <div className={style.text}>
                <h3>
                  {item.surname}
                  <br />
                  {item.name} {item.lastName}
                </h3>
                <span>{item.position}</span>
                <div className={style.cardBtnNPrice}>
                  Прием: {item.price} ₽
                  <Button onClick={() => toggleVisible()}>Записаться</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* <Modal visible={visible} setVisible={setVisible}>
        <SignUpForms />
      </Modal> */}
    </>
  );
};

export default CardPerson;
