import style from "./CardService.module.scss";
import Button from "shared/UI/Button/Button";
import { FC } from "react";

interface CardServiceProps {
  cards: Array<{
    id: number;
    title: string;
    price: number;
    description: string;
  }>;
}

const CardService: FC<CardServiceProps> = ({ cards }) => {
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
          <Button>Записать питомца</Button>
        </div>
      ))}
    </div>
  );
};

export default CardService;
