import { useState } from "react";
import cls from "./SignUpForms.module.scss";
import Button from "shared/UI/Button/Button";
import Select from "shared/UI/Select/Select";
import toast from "react-hot-toast";
import { Pet } from "entities/User/model/type/type";
import { Favor, Veterinarian } from "entities/ServiceVet/model/type/type";
interface SUFProps {
  petsData: Pet[];
  favors: Favor[];
  vets: Veterinarian[];
}

interface Option {
  label: string; // Отображаемый текст
  value: string; // Значение для передачи
}

const SignUpForms: React.FC<SUFProps> = ({ favors, petsData, vets }) => {
  const mapFavorsToOptions = (favors: Favor[]): Option[] =>
    favors.map((favor) => ({
      label: favor.title,
      value: favor.id, // Приводим к строке
    }));

  const mapVetsToOptions = (vets: Veterinarian[]): Option[] =>
    vets.map((vet) => ({
      label: `${vet.surname} ${vet.name} ${vet.lastName}`,
      value: vet.id, // Приводим к строке
    }));

  const mapPetsToOptions = (pets: Pet[]): Option[] =>
    pets.map((pet) => ({
      label: pet.name,
      value: pet.id, // Приводим к строке
    }));

  const [selectedFavor, setSelectedFavor] = useState<string>("") || "0";
  const [selectedVet, setSelectedVet] = useState<string>("") || "0";
  const [selectedPet, setSelectedPet] = useState<string>("") || "0";

  const favorOptions = mapFavorsToOptions(favors);
  const vetOptions = mapVetsToOptions(vets);
  const petOptions = mapPetsToOptions(petsData);

  const handleFavorChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedFavor(event.target.value);
  const handleVetChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedVet(event.target.value);
  const handlePetChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedPet(event.target.value);

  const handleSubmit = () => {
    if (!selectedFavor || !selectedVet || !selectedPet) {
      toast.error("Пожалуйста, заполните все поля.");
      return;
    }
    console.log("Выбранная услуга:", selectedFavor);
    console.log("Выбранный врач:", selectedVet);
    console.log("Выбранное животное:", selectedPet);
    toast.success("Запись успешна!");
  };

  return (
    <div>
      <form className={cls.form}>
        <Select
          children="Услуга"
          aria-label="Выберите услугу"
          options={favorOptions}
          value={selectedFavor}
          onChange={handleFavorChange}
        />
        <Select
          children="Врач"
          aria-label="Выберите врача"
          options={vetOptions}
          value={selectedVet}
          onChange={handleVetChange}
        />
        <Select
          children="Кого хотите записать?"
          aria-label="Выберите животное"
          options={petOptions}
          value={selectedPet}
          onChange={handlePetChange}
        />
        <Button
          onClick={handleSubmit}
          disabled={!selectedFavor || !selectedVet || !selectedPet}
        >
          ЗАПИСАТЬСЯ
        </Button>
      </form>
    </div>
  );
};

export default SignUpForms;
