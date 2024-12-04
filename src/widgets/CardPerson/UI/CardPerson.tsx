import Button from "shared/UI/Button/Button";
import style from "./CardPerson.module.scss";
import Modal from "shared/UI/Modal/Modal";
import { SignUpForms } from "widgets/SignupForms";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { Favor, Veterinarian } from "entities/ServiceVet/model/type/type";
import { Pet } from "entities/User/model/type/type";

interface CardPersonProps {
  isAuth: boolean;
  persons: Veterinarian[];
  cards: Favor[];
  petsData: Pet[];
}

const CardPerson: FC<CardPersonProps> = ({
  persons,
  isAuth,
  cards,
  petsData,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedVetId, setSelectedVetId] = useState<string | null>(null);

  const toggleVisible = (id: string) => {
    if (isAuth) {
      setSelectedVetId(id);
      setVisible(true);
    } else {
      toast("Вам надо зайти в свой аккаунт!");
    }
  };

  const selectedVet = persons.find((vet) => vet.id === selectedVetId);
  const favorsFilter = cards.filter(
    (item) => item.specialization === selectedVet?.specialization
  );
  return (
    <>
      {!persons.length ? (
        <div>Нет данных!</div>
      ) : (
        <div className={style.cardLoyut}>
          {persons.map((item) => (
            <div className={style.card} key={item.id}>
              <img
                src={item.photoUrl}
                className={style.cardPhoto}
                alt={item.name}
              />
              <div className={style.text}>
                <h3>
                  {item.surname}
                  <br />
                  {item.name} {item.lastName}
                </h3>
                <span>{item.specialization}</span>
                <div className={style.cardBtnNPrice}>
                  Прием: от {item.price} ₽
                  <Button onClick={() => toggleVisible(item.id)}>
                    Записаться
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedVet && (
        <Modal visible={visible} setVisible={setVisible}>
          <SignUpForms
            favors={favorsFilter}
            vets={[selectedVet]}
            petsData={petsData}
          />
        </Modal>
      )}
    </>
  );
};

export default CardPerson;
