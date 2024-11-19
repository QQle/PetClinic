import style from "./CardService.module.scss";
import Button from "shared/UI/Button/Button";
import { FC, useState } from "react";
import Modal from "shared/UI/Modal/Modal";
import { SignUpForms } from "widgets/SignupForms";
import toast, { Toaster } from "react-hot-toast";

interface CardServiceProps {
  isAuth: boolean;
  cards: Array<{
    id: number;
    title: string;
    price: number;
    description: string;
  }>;
}

const CardService: FC<CardServiceProps> = ({ cards, isAuth }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = (id: number) => {
    !isAuth
      ? setVisible(true)
      : toast(() => <span>Вам надо зайти в свой аккаунт!</span>);
  };
  return (
    <div className={style.card}>
      {cards.map((item) => (
        <div key={item.id} className={style.card_content}>
          <h2>
            Прием <br></br>
            {item.title}
          </h2>
          <span>от {item.price} ₽</span>
          <p>{item.description}</p>
          <Button onClick={() => toggleVisible(item.id)}>
            Записать питомца
          </Button>
        </div>
      ))}
      <Modal visible={visible} setVisible={setVisible}>
        <SignUpForms />
      </Modal>
    </div>
  );
};

export default CardService;
