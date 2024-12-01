import { useEffect, useState } from "react";
import cls from "./SignUpForms.module.scss";
import Button from "shared/UI/Button/Button";
import Select from "shared/UI/Select/Select";
import toast from "react-hot-toast";
import { Pet } from "entities/User/model/type/type";
import { Favor, Veterinarian } from "entities/ServiceVet/model/type/type";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { USER_LOCALSTORAGE_ID } from "shared/const/localStorage";
import { addRecord } from "entities/Records/model/service/addRecord";
interface SUFProps {
  petsData: Pet[];
  favors: Favor[];
  vets: Veterinarian[];
}

interface Option {
  label: string;
  value: string;
}

const SignUpForms: React.FC<SUFProps> = ({ favors, petsData, vets }) => {
  const dispatch = useAppDispatch();
  const userID = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_ID) || "0");

  const [selectedFavor, setSelectedFavor] = useState<string>("");
  const [selectedVet, setSelectedVet] = useState<string>("");
  const [selectedPet, setSelectedPet] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");

  const mapOptions = <
    T extends {
      id: string;
      title?: string;
      name?: string;
      surname?: string;
      lastName?: string;
    }
  >(
    items: T[],
    labelFormatter: (item: T) => string
  ): Option[] =>
    items.map((item) => ({
      label: labelFormatter(item),
      value: item.id,
    }));

  const favorOptions = mapOptions(favors, (favor) => favor.title || "");
  const vetOptions = mapOptions(
    vets,
    (vet) => `${vet.surname || ""} ${vet.name || ""} ${vet.lastName || ""}`
  );
  const petOptions = mapOptions(petsData, (pet) => pet.name || "");

  useEffect(() => {
    if (!selectedFavor && favorOptions.length > 0) {
      setSelectedFavor(favorOptions[0].value);
    }
    if (!selectedVet && vetOptions.length > 0) {
      setSelectedVet(vetOptions[0].value);
    }
    if (!selectedPet && petOptions.length > 0) {
      setSelectedPet(petOptions[0].value);
    }
  }, [favorOptions, vetOptions, petOptions]);
  const handleSubmit = () => {
    const addRecordData = {
      userId: userID,
      petId: selectedPet,
      veterinarianId: selectedVet,
      favorsId: selectedFavor,
      dateOfAdmission: selectedDate,
    };

    dispatch(addRecord(addRecordData))
      .unwrap()
      .then(() => {
        toast.success("Запись успешна!");
      })
      .catch((error) => {
        toast.error(`Ошибка: ${error.message || "Неизвестная ошибка"}`);
      });
  };

  return (
    <div>
      <form className={cls.form} onSubmit={(e) => e.preventDefault()}>
        <Select
          children="Услуга"
          aria-label="Выберите услугу"
          options={favorOptions}
          value={selectedFavor}
          onChange={(e) => setSelectedFavor(e.target.value)}
        />
        <Select
          children="Врач"
          aria-label="Выберите врача"
          options={vetOptions}
          value={selectedVet}
          onChange={(e) => setSelectedVet(e.target.value)}
        />
        <Select
          children="Кого хотите записать?"
          aria-label="Выберите животное"
          options={petOptions}
          value={selectedPet}
          onChange={(e) => setSelectedPet(e.target.value)}
        />
        <h3 className={cls.formDiv}>Выберите дату</h3>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <Button onClick={handleSubmit}>ЗАПИСАТЬСЯ</Button>
      </form>
    </div>
  );
};

export default SignUpForms;
