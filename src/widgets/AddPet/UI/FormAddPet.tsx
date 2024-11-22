import Button from "shared/UI/Button/Button";
import cls from "./FormAddPet.module.scss";
import toast from "react-hot-toast";

const FormAddPet = () => {
  const handleSucces = () => {
    toast.success("Питомец добавлен!");
  };

  return (
    <div className={cls.FormAddPet}>
      <form className={cls.Forms}>
        <input type="text" placeholder="Тип" />
        <input type="text" placeholder="Кличка" />
        <input type="text" placeholder="Возраст" />
        <div className={cls.Forms_checkBox}>
          <div className={cls.checkBox}>
            <label htmlFor="scales">Питомец стерилизован?</label>
            <input type="checkbox" id="scales" name="scales" />
          </div>
          <div className={cls.checkBox}>
            <label htmlFor="scales">Питомец привит?</label>
            <input type="checkbox" id="scales" name="scales" />
          </div>
        </div>
        <Button onClick={handleSucces}>Добавить</Button>
      </form>
    </div>
  );
};

export default FormAddPet;
