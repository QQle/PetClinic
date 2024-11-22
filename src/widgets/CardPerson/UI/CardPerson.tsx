import { dataPerson } from "shared/mock data/cardPersonal";
import Button from "shared/UI/Button/Button";
import style from "./CardPerson.module.scss";
import Modal from "shared/UI/Modal/Modal";
import { SignUpForms } from "widgets/SignupForms";
import { FC, useState } from "react";
import toast from "react-hot-toast";

interface CardPersonProps {
  isAuth: boolean;
  persons: Array<{
    id: number;
    img: string;
    price: number;
    surname: string;
    name: string;
    lastName: string;
    position: string;
  }>;
}

const CardPerson: FC<CardPersonProps> = ({ persons, isAuth }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = (id: number) => {
    isAuth
      ? setVisible(true)
      : toast(() => <span>Вам надо зайти в свой аккаунт!</span>);
  };
  return (
    <div className={style.cardLoyut}>
      {persons.map((item) => (
        <div className={style.card}>
          <img src={item.img} className={style.cardPhoto} />
          <div className={style.text}>
            <h3>
              {item.surname}
              <br></br>
              {item.name} {item.lastName}
            </h3>
            <span>{item.position}</span>
            <div className={style.cardBtnNPrice}>
              Прием: {item.price} ₽
              <Button onClick={() => toggleVisible(item.id)}>Записаться</Button>
            </div>
          </div>
        </div>
      ))}
      <Modal visible={visible} setVisible={setVisible}>
        <SignUpForms />
      </Modal>
    </div>
  );
};

export default CardPerson;
