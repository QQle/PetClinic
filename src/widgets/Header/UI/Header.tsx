import cls from "./Header.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "shared/UI/Button/Button";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getAuth, userService } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import logo from "../../../shared/assets/love_icon.svg";
import prof_icon from "../../../shared/assets/profile_icon.svg";
import { getUserName } from "entities/Authorization";
import {
  USER_LOCALSTORAGE_ID,
  USER_LOCALSTORAGE_USERNAME,
} from "shared/const/localStorage";

const Header = () => {
  const dispatch = useAppDispatch();
  const isAuth = true;
  const userNameLS = localStorage.getItem(USER_LOCALSTORAGE_USERNAME);
  const userIDLS = localStorage.getItem(USER_LOCALSTORAGE_ID);
  const userName = JSON.parse(userNameLS || "user");
  const userID = JSON.parse(userIDLS || "0");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
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
        {!isAuth ? (
          <Button onClick={() => navigate("/login")}>Войти</Button>
        ) : (
          <>
            <NavLink
              to={`/Profile/${userID}`}
              className={cls.header_navigate__item}
            >
              <div className={cls.header_profile} onClick={toggleOpen}>
                <div className={cls.header_profile__img}>
                  <img src={prof_icon} alt="avatar" />
                </div>
                <span>{userName}</span>
              </div>
            </NavLink>
            <NavLink
              to={"/vacancy"}
              className={cls.header_navigate__item}
            ></NavLink>
            <NavLink to={`/shelter`} className={cls.header_navigate__item}>
              ПРИЮТ
            </NavLink>
            <NavLink
              className={cls.header_navigate__item}
              to="/login"
              onClick={() => dispatch(userService())}
            >
              ВЫЙТИ
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
