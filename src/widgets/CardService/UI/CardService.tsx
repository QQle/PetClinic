import { data } from "shared/mock data/cardService";
import style from "./CardService.module.scss";
import Button from "shared/UI/Button/Button";

const CardService: React.FC = ({}) => {
    return (
        <div className={style.card}>
            {data.map((item) => <div key={item.id} className={style.card_content}>
                <h2>Прием <br></br>{item.title}</h2>
                <span>от {item.price} ₽</span>
                <p>{item.description}</p>
                <Button>Записать питомца</Button>
            </div>)}
        </div>
    )
}

export default CardService;