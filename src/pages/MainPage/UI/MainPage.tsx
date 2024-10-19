import { CardService } from "widgets/CardService";
import cls from "./MainPage.module.scss";
import { CardPerson } from "widgets/CardPerson";
import { cardInfo } from "shared/mock data/cardInfo";
import { cardInfoPers } from "shared/mock data/cardInfo";

const MainPage = () => {
  return (
    <div className={cls.MainPage}>
      <section className={cls.top}>
        <div className={cls.top_box}>
          <h1>
            Pet <br></br> Clinic
          </h1>
          <div className={cls.top_box_info}>
            <span>Круглосуточная ветеринарная клиника</span>
            <p>+7 999 430 74 32</p>
            <div>
              <a href="https://go.2gis.com/o8gnw" target="_blank">
                Москва, м. Алексеевская, Зубарев переулок д. 7
              </a>
              <img src="https://vet.city/upload/iblock/dde/p2s5n0fk7eh6vgg7weipdz7f7cjpdnn0.svg" />
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default MainPage;
