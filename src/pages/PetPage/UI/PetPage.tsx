import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import cls from "./PetPage.module.scss";
import Button from "shared/UI/Button/Button";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { PetsData, getPet } from "entities/PetsRegistered";
import { SliderComponent } from "widgets/Slider";

const PetPage = () => {
  const { id } = useParams<{ id: string }>();
  const pets = useSelector(PetsData);
  const dispatch = useAppDispatch();

  const pet = pets.result?.find((item) => item.id === id);

  useEffect(() => {
    if (!pet && id) {
      dispatch(getPet(Number(id)));
    }
  }, [dispatch]);

  return (
    <div className={cls.PetPage}>
      <NavLink to="../shelter">
        <Button className={cls.btnBack} type="submit">
          Назад
        </Button>
      </NavLink>
      {pet && (
        <>
          <div className={cls.PetPageSlider}>
            <h2>{pet.petName}</h2>
            <SliderComponent slides={pet.picturePet} />
          </div>
          <div>
            <h2>Основная информация</h2>
            <div className={cls.tableContainer}>
              <table>
                <tbody>
                  <tr>
                    <td>Кличка:</td>
                    <td>{pet.petName}</td>
                  </tr>
                  <tr>
                    <td>Пол:</td>
                    <td>{pet.genderPet}</td>
                  </tr>
                  <tr>
                    <td>Возраст:</td>
                    <td>{pet.agePet}</td>
                  </tr>
                  <tr>
                    <td>Порода:</td>
                    <td>{pet.breedPet}</td>
                  </tr>
                  <tr>
                    <td>Окрас:</td>
                    <td>{pet.colorPet}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={cls.features}>
            <h2>Особенности</h2>
            <ul>
              {pet.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Описание</h2>
            <div className={cls.description}>{pet.description}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default PetPage;
