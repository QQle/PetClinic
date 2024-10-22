import style from "./CardService.module.scss";
import Button from "shared/UI/Button/Button";
import { FC, useState } from "react";
import Modal from "shared/UI/Modal/Modal";
import { SignUpForms } from "widgets/SignupForms";

interface CardServiceProps {
  cards: Array<{
    id: number;
    title: string;
    price: number;
    description: string;
  }>;
}

const CardService: FC<CardServiceProps> = ({ cards }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = (id: number) => {
    setVisible(true);
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
