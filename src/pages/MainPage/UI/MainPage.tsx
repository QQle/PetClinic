import { CardService } from "widgets/CardService";
import cls from "./MainPage.module.scss";
import { CardPerson } from "widgets/CardPerson";
import { cardInfo } from "shared/mock data/cardInfo";
import { cardInfoPers } from "shared/mock data/cardInfo";

const MainPage = () => {
  return (
    <div className={cls.MainPage}>
      <section className={cls.top}></section>
      <section className={cls.infoCards}>
        <div className={cls.infoCardPers}>
          <span>врачи vetcity clinic</span>
          <h2>{cardInfoPers.title}</h2>
          <p>{cardInfoPers.description}</p>
          <span>{cardInfoPers.desr}:</span>
          {cardInfoPers.group.map((item) => (
            <ul>{item}</ul>
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
    </div>
  );
};

export default MainPage;
