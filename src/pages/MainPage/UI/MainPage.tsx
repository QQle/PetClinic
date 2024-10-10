import { CardService } from 'widgets/CardService';
import cls from './MainPage.module.scss'
import { CardPerson } from 'widgets/CardPerson';
const MainPage = () => {
    return (
        <div className={cls.MainPage}>
                <CardService />
                <CardPerson />
        </div>
    )
}

export default MainPage;