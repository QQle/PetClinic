import Button from "shared/UI/Button/Button";
import cls from "./FormAddPet.module.scss";

const FormAddPet = () => {
  return (
    <div className={cls.FormAddPet}>
      <form className={cls.Forms}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <Button>Добавить</Button>
      </form>
    </div>
  );
};

export default FormAddPet;
