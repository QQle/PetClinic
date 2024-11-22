import { useState } from "react";
import cls from "./SignUpForms.module.scss";
import Button from "shared/UI/Button/Button";
import Select from "shared/UI/Select/Select";
import toast from "react-hot-toast";

const SignUpForms = ({}) => {
  const [selectedHotel, setSelectedHotel] = useState("");
  const [selectedT, setSelectedT] = useState("");
  const [selectedTW, setSelectedTW] = useState("");
  const firstOptions = [
    { value: "hotel1", label: "Вакцинация" },
    { value: "hotel2", label: "Узи" },
    { value: "hotel3", label: "Первый осмотр" },
  ];
  const sOptions = [
    { value: "hotel1", label: "Алимова Рания Сайдашова" },
    { value: "hotel2", label: "Тимофеев Евгений Викторович" },
    { value: "hotel3", label: "Захарова Вкитория Леонидовна" },
  ];
  const TOptions = [{ value: "hotel1", label: "Тузик" }];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHotel(event.target.value);
  };
  const handleChangeS = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedT(event.target.value);
  };
  const handleChangeT = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTW(event.target.value);
  };

  const handleSucces = () => {
    toast.success("Вы успешно записались!");
  };

  return (
    <div>
      <form className={cls.form}>
        <Select
          children="Услуга"
          options={firstOptions}
          value={selectedHotel}
          onChange={handleChange}
        />
        <Select
          children="Врач"
          options={sOptions}
          value={selectedT}
          onChange={handleChangeS}
        />
        <Select
          children="Кого хотите записать?"
          options={TOptions}
          value={selectedTW}
          onChange={handleChangeT}
        />
        <Button onClick={handleSucces}>ЗАПИСАТЬСЯ</Button>
      </form>
    </div>
  );
};

export default SignUpForms;
