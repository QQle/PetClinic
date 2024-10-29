import Button from "shared/UI/Button/Button";
import cls from "./ShelterPage.module.scss";
import { NavLink } from "react-router-dom";
import dog from "../../../shared/assets/dog.svg";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getPets, PetsData } from "entities/PetsRegistered";
import { PetsList } from "widgets/PetsList";
import { SectionHeader } from "widgets/SectionHeader";

const ShelterPage = () => {
  const dispatch = useAppDispatch();
  const PetsInfo = useSelector(PetsData);
  const { result, page, limit, isLoading } = PetsInfo;

  useEffect(() => {
    dispatch(getPets({ page, limit }));
  }, [dispatch, page]);
  return (
    <div className={cls.ShelterPage}>
      <section className={cls.head}>
        <div className={cls.title}>
          <h1>
            Cчастье ближе,
            <br /> чем вы думаете
          </h1>
        </div>
        <div className={cls.bg}>
          <div className={cls.char}></div>
          <div className={cls.char_bg}></div>
          <img className={cls.bg_img} src={dog} alt="dog" />
        </div>
      </section>

      <section className={cls.pets}>
        <SectionHeader
          mainText={"Наши питомцы"}
          subText={"Мы покажем Вам наших питомцев"}
        ></SectionHeader>
        <PetsList
          result={result}
          page={page}
          limit={limit}
          isLoading={isLoading}
        />
      </section>
    </div>
  );
};

export default ShelterPage;
