import style from "./CardService.module.scss";
import Button from "shared/UI/Button/Button";
import { FC, useState } from "react";
import Modal from "shared/UI/Modal/Modal";
import { SignUpForms } from "widgets/SignupForms";
import toast, { Toaster } from "react-hot-toast";
import { Favor, Veterinarian } from "entities/ServiceVet/model/type/type";
import { Pet } from "entities/User/model/type/type";

interface CardServiceProps {
  isAuth: boolean;
  cards: Favor[];
  petsData: Pet[];
  vets: Veterinarian[];
}

const CardService: FC<CardServiceProps> = ({
  cards,
  isAuth,
  petsData,
  vets,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedCardId, setSelectedCardId] = useState<string>("");

  const toggleVisible = (id: string) => {
    if (isAuth) {
      setSelectedCardId(id);
      setVisible(true);
    } else {
      toast(() => <span>Вам надо зайти в свой аккаунт!</span>);
    }
  };

  const selectedCard = cards.find((card) => card.id === selectedCardId);

  return (
    <div className={style.card}>
      {cards.map((item) => (
        <div key={item.id} className={style.card_content}>
          <h2>
            Прием <br />
            {item.title}
          </h2>
          <span>от {item.basePrice} ₽</span>
          <p>{item.description}</p>
          <Button onClick={() => toggleVisible(item.id)}>
            Записать питомца
          </Button>
        </div>
      ))}
      {selectedCard && (
        <Modal visible={visible} setVisible={setVisible}>
          <SignUpForms
            favors={[selectedCard]} // Передаем только выбранную услугу
            vets={vets}
            petsData={petsData}
          />
        </Modal>
      )}
    </div>
  );
};

export default CardService;
