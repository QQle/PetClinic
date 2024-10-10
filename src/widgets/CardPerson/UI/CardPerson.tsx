import { dataPerson } from "shared/mock data/cardPersonal";
import Button from "shared/UI/Button/Button";
import style from "./CardPerson.module.scss";
const CardPerson: React.FC = () => {
    return (
        <div className={style.cardLoyut}>
            {dataPerson.map((item) =>
            <div className={style.card}>
                <img src={item.img} className={style.cardPhoto}/>
                <div className={style.text}>
                    <h3>{item.surname}<br></br>{item.name} {item.lastName}</h3>
                    <span>{item.position}</span>
                    <div className={style.cardBtnNPrice}>
                        Прием: {item.price} ₽
                        <Button>Записаться</Button>
                    </div>
                </div>
            </div>
        )
            }
        </div>
    )
}

export default CardPerson;