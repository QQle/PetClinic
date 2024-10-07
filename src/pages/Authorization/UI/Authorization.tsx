import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import style from "./Authorization.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import Button from "shared/UI/Button/Button";
import { loginUser } from "entities/Authorization/model/service/loginUser";
import { AuthActions, getError, getIsLoading, getPassword, getUserName } from "entities/Authorization";

const Authorization = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const name = useSelector( getUserName );
  const password = useSelector( getPassword );
  const Error = useSelector( getError );
  const [visible, setVisible] = useState(false);

const handleUsername = useCallback((value: string) => {
    dispatch(AuthActions.setUsername(value));
}, [dispatch]);

const handlePassword = useCallback((value: string) => {
  dispatch(AuthActions.setPassword(value));
}, [dispatch]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = useCallback(
    async () => {
      try {
        const result = await dispatch(loginUser({name, password}));
        if (result.meta.requestStatus === "rejected") {
          setVisible(true)
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Произошла ошибка:", error);
      }
    },
    [dispatch, navigate, name, password]
  );

  return (
    <div className={style.container}>
        <form
        className={style.form}
        method="post"
      >
        <p className={style.title}>Войти</p>
        <input
          {...register("userName", { required: true })}
          placeholder="Имя пользователя"
          type="text"
          className={style.input}
          onChange={(e) => handleUsername(e.target.value)}
        />
        <input
          {...register("password", {
            required: true,
          })}
          placeholder="Пароль"
          type="password"
          className={style.input}
          onChange={(e) => handlePassword(e.target.value)}
        />
        <div className={style.error}>
          {errors?.password && <em>Заполните поля!</em>}
        </div>
        <Button onClick={handleSubmit(onSubmit)}>Войти</Button>
        <div className={style.form_section}>
          <p className={style.signin}>Вы не зарегистрированны? <NavLink to={'/signin'} className={style.link}>Зарегистрироваться</NavLink></p>
          </div>
      </form> 
      <div>{Error}</div>
    </div>
  );
};

export default Authorization;