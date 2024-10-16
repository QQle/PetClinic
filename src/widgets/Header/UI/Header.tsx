import cls from "./Header.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "shared/UI/Button/Button";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getAuth, userService } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useOutsideClick } from "shared/lib/hooks/useOutsideClick";
import logo from "../../../shared/assets/love_icon.svg";

const Header = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(getAuth);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const btnRef = useRef<HTMLDivElement>(null);

  const selectRef = useOutsideClick<HTMLDivElement>(() => {
    setIsOpen(false);
  }, [btnRef?.current]);

  return (
    <header className={cls.header}>
      <NavLink to={"/"} className={cls.header_logo}>
        <img src={logo} alt="logo" />
        <h1>PETCLINIC</h1>
      </NavLink>
      <div className={cls.header_navigate}>
        <NavLink to={`/tasks`} className={cls.header_navigate__item}></NavLink>
        <NavLink to={"/"} className={cls.header_navigate__item}></NavLink>
        <NavLink
          to={"/vacancy"}
          className={cls.header_navigate__item}
        ></NavLink>
      </div>
      {!isAuth ? (
        <Button onClick={() => navigate("/login")}>Войти</Button>
      ) : (
        <div ref={btnRef} className={cls.header_profile} onClick={toggleOpen}>
          {/* <div className={cls.header_profile__img}><img src={prof_icon} alt='avatar'/></div> */}
          {/* <img src={arrow} alt='arrow' className={cls.header_profile__arrow}/>  */}
          {isOpen && (
            <div className={cls.header_profile__links} ref={selectRef}>
              <div className={cls.profile_links__item}>
                <NavLink to={`/profile`}>Профиль</NavLink>
              </div>
              <div className={cls.profile_links__item}>
                <NavLink to="/" onClick={() => dispatch(userService())}>
                  Выйти
                </NavLink>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
export default Header;
