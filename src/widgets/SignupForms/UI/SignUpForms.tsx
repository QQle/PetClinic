import { useState } from "react";
import cls from "./SignUpForms.module.scss";
import Button from "shared/UI/Button/Button";
import Select from "shared/UI/Select/Select";

const SignUpForms = ({}) => {
  const [selectedHotel, setSelectedHotel] = useState("");

  const hotelOptions = [
    { value: "hotel1", label: "Отель 1" },
    { value: "hotel2", label: "Отель 2" },
    { value: "hotel3", label: "Отель 3" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHotel(event.target.value);
  };

  return (
    <div>
      <form className={cls.form}>
        <Select
          children="Услуга"
          options={hotelOptions}
          value={selectedHotel}
          onChange={handleChange}
        />
        <Select
          children="Врач"
          options={hotelOptions}
          value={selectedHotel}
          onChange={handleChange}
        />
        <Button>ЗАПИСАТЬСЯ</Button>
      </form>
    </div>
  );
};

export default SignUpForms;
