import { CardService } from "widgets/CardService";
import cls from "./MainPage.module.scss";
import { CardPerson } from "widgets/CardPerson";
import { cardInfo } from "shared/mock data/cardInfo";
import { cardInfoPers } from "shared/mock data/cardInfo";
import { SliderTop } from "widgets/SliderTop";
import Button from "shared/UI/Button/Button";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAuth, getDataPetsByOwner, getPetsByOwner } from "entities/User";
import {
  getServices,
  getVeterinarian,
  serviceData,
  vetData,
} from "entities/ServiceVet";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { USER_LOCALSTORAGE_ID } from "shared/const/localStorage";
import toast from "react-hot-toast";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const userID = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_ID) || "0");

  useEffect(() => {
    dispatch(getServices());
    dispatch(getVeterinarian());
    dispatch(getPetsByOwner(userID));
  }, [dispatch]);

  const data = useSelector(serviceData);
  const dataPerson = useSelector(vetData);
  const [showMore, setShowMore] = useState<boolean>(false);
  const isAuth = useSelector(getAuth);

  const defaultCount = 4;
  const displayedCards = showMore ? data : data.slice(0, defaultCount);
  const petsData = useSelector(getDataPetsByOwner);

  const needVaccination = petsData.filter(
    (item) => item.needRevaccination === true
  );

  if (needVaccination.length > 0) {
    const petNames = needVaccination.map((item) => item.name).join(", ");

    toast(
      `Питомцу(ам) ${petNames} необходимо записать на повторную вакцинацию!`
    );
  }

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={cls.MainPage}>
      <SliderTop />
      <section className={cls.infoCards}>
        <div className={cls.infoCardPers}>
          <span>врачи PetClinic</span>
          <h2>{cardInfoPers.title}</h2>
          <p>{cardInfoPers.description}</p>
          <span>{cardInfoPers.desr}:</span>
          {cardInfoPers.group.map((item) => (
            <li>{item}</li>
          ))}
        </div>
        <div className={cls.infoCard}>
          <div className={cls.infoCard_title}>
            <h2>
              <span>Мы — </span>
              <br></br>
              {cardInfo.title}
            </h2>
            <p>{cardInfo.description}</p>
          </div>
          <div className={cls.infoCard_groups}>
            {cardInfo.group.map((item) => (
              <div key={item.id} className={cls.infoCard_group}>
                <img src={item.icon} alt="icon" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {!data.length ? (
        ""
      ) : (
        <section className={cls.CardService}>
          <CardService
            cards={displayedCards}
            isAuth={isAuth}
            petsData={petsData}
            vets={dataPerson}
          />
          <Button className={cls.CardService_btn} onClick={handleToggle}>
            {showMore ? "Скрыть" : "Показать еще"}
          </Button>
        </section>
      )}
      <section className={cls.CardPersonal}>
        <h2>Наши врачи</h2>
        <CardPerson
          persons={dataPerson}
          isAuth={isAuth}
          cards={data}
          petsData={petsData}
        />
      </section>
    </div>
  );
};

export default MainPage;
