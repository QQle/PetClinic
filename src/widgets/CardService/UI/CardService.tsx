import { data } from "shared/mock data/cardService";
import style from "./CardService.module.scss";

const CardService: React.FC = ({}) => {
    return (
        <div className={style.card}>
            {data.map((item) => <div key={item.id} className={style.card_content}>
                <h2>Прием <br></br>{item.title}</h2>
                <span>от {item.price} ₽</span>
                <p>{item.description}</p>
                <button>Запись к врачу</button>
            </div>)}
        </div>
    )
}

export default CardService;