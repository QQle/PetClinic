import cls from "./Header.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "shared/UI/Button/Button";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getAuth, userService } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import logo from "../../../shared/assets/love_icon.svg";
import prof_icon from "../../../shared/assets/profile_icon.svg";

const Header = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(getAuth);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const id = 1;
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={cls.header}>
      <NavLink to={"/"} className={cls.header_logo}>
        <img src={logo} alt="logo" />
        <h1>PETCLINIC</h1>
      </NavLink>
      <div className={cls.header_navigate}>
        <NavLink to={`/shelter`} className={cls.header_navigate__item}>
          ПРИЮТ
        </NavLink>
        <NavLink to={`/Profile/${id}`} className={cls.header_navigate__item}>
          ПРОФИЛЬ
        </NavLink>
        <NavLink
          to={"/vacancy"}
          className={cls.header_navigate__item}
        ></NavLink>
        <NavLink
          className={cls.header_navigate__item}
          to="/login"
          onClick={() => dispatch(userService())}
        >
          ВЫЙТИ
        </NavLink>
        {!isAuth ? (
          <Button onClick={() => navigate("/login")}>Войти</Button>
        ) : (
          <div className={cls.header_profile} onClick={toggleOpen}>
            <div className={cls.header_profile__img}>
              <img src={prof_icon} alt="avatar" />
            </div>
            <span>Bebra</span>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
