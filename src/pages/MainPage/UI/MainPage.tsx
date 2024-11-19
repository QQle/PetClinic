import { CardService } from "widgets/CardService";
import cls from "./MainPage.module.scss";
import { CardPerson } from "widgets/CardPerson";
import { cardInfo } from "shared/mock data/cardInfo";
import { cardInfoPers } from "shared/mock data/cardInfo";
import { SliderTop } from "widgets/SliderTop";
import Button from "shared/UI/Button/Button";
import { useState } from "react";
import { data } from "shared/mock data/cardService";
import { useSelector } from "react-redux";
import { getAuth } from "entities/User";

const MainPage = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const isAuth = useSelector(getAuth);
  const defaultCount = 4;
  const displayedCards = showMore ? data : data.slice(0, defaultCount);

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
      <section className={cls.CardService}>
        <CardService cards={displayedCards} isAuth={isAuth} />
        <Button className={cls.CardService_btn} onClick={handleToggle}>
          {showMore ? "Скрыть" : "Показать еще"}
        </Button>
      </section>
      <section className={cls.CardPersonal}>
        <h2>Наши врачи</h2>
        <CardPerson />
      </section>
    </div>
  );
};

export default MainPage;
