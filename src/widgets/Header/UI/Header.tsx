import cls from "./Header.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "shared/UI/Button/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAuth, userService } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import logo from "../../../shared/assets/love_icon.svg";
import prof_icon from "../../../shared/assets/profile_icon.svg";
import vet from "../../../shared/assets/vet.png";
import {
  USER_LOCALSTORAGE_ID,
  USER_LOCALSTORAGE_USERNAME,
} from "shared/const/localStorage";
import { getRole } from "entities/User/model/selectors/getRole";

const Header = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(getAuth);
  const role = useSelector(getRole);
  console.log("rple-" + role);
  let userName = "user";
  let userID = "0";
  if (
    localStorage.getItem(USER_LOCALSTORAGE_USERNAME) &&
    localStorage.getItem(USER_LOCALSTORAGE_ID)
  ) {
    const userNameLS = localStorage.getItem(USER_LOCALSTORAGE_USERNAME);
    const userIDLS = localStorage.getItem(USER_LOCALSTORAGE_ID);
    userName = JSON.parse(userNameLS || "user");
    userID = JSON.parse(userIDLS || "0");
  }

  const navigate = useNavigate();

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
            {role === "ser" ? (
              <NavLink
                to={`/Profile/${userID}`}
                className={cls.header_navigate__item}
              >
                <div className={cls.header_profile}>
                  <div className={cls.header_profile__img}>
                    <img src={prof_icon} alt="avatar" />
                  </div>
                  <span>{userName}</span>
                </div>
              </NavLink>
            ) : (
              <NavLink
                to={`/vetCabinet/${userID}`}
                className={cls.header_navigate__item}
              >
                <div className={cls.header_profile}>
                  <div className={cls.header_profile__img}>
                    <img src={vet} alt="avatar" />
                  </div>
                  <span>{userName}</span>
                </div>
              </NavLink>
            )}

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
