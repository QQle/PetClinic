import { CardService } from 'widgets/CardService';
import cls from './MainPage.module.scss'
const MainPage = () => {
    return (
        <div className={cls.MainPage}>
                <CardService />
        </div>
    )
}

export default MainPage;