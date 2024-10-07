import { NavLink, useNavigate } from "react-router-dom";
import style from "./Registration.module.scss";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { RegistActions, getIsLoading, siginUser, getUserName, getPassword, getEmail, getError } from "entities/Registration";
import Button from "shared/UI/Button/Button";

const Registration = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const name = useSelector( getUserName );
  const password = useSelector( getPassword );
  const email = useSelector( getEmail );
  const Error = useSelector( getError );
  const [visible, setVisible] = useState(false);

  const handleUsername = useCallback((value: string) => {
    dispatch(RegistActions.setUserName(value));
  }, [dispatch]);

  const handlePassword = useCallback((value: string) => {
    dispatch(RegistActions.setPassword(value));
  }, [dispatch]);

  const handleEmail = useCallback((value: string) => {
    dispatch(RegistActions.setEmail(value));
  }, [dispatch]);

    const {
        register,
        formState:{
            errors,   
        },
        handleSubmit,
    } = useForm({
      mode: "onBlur"
    });

      const onSubmit = useCallback( async () => {
        const result = await  dispatch(siginUser({ name , password, email }));
         if(result.meta.requestStatus === "fulfilled") {
            navigate("/login");
          } else {
            setVisible(true)
          }
      },[dispatch, navigate, name, password, email]);
      
  return (
    <div className={style.container}>
      <form className={style.form} method="post" >
      <p className={style.title}>Регистрация</p>
        <input {...register("name", {required: true})}  placeholder="Имя пользователя" type="text" className={style.input} onChange={e => handleUsername(e.target.value)}/> 
        <input {...register("email", {required: true})} placeholder="Email" type="email" className={style.input} onChange={e => handleEmail(e.target.value)}/>
        <input {...register("pass", {
          required: true,
          minLength: 8,
          pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        })} placeholder="Пароль" type="password" className={style.input} onChange={e => handlePassword(e.target.value)}/>
          <div className={style.error}>{errors?.pass && <em>"Пароль должен содержать минимум 8 символов, включая только буквы и цифры только на латинице."</em>}</div>
          <div className={style.error}>
            {errors.name && errors.secname && errors.surname && <em>Все поля должны быть заполнены!</em>}
          </div>
      <Button onClick={handleSubmit(onSubmit)}>Зарегистрироваться</Button>
      <p className={style.signin}>
          У вас уже есть учетная запись? <NavLink to={'/login'} className={style.link}>Авторизоваться</NavLink>
      </p>
     </form>
     <div>{Error}</div>
    </div>
  );
};

export default Registration;