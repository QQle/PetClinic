import React from "react";
import cls from "./ClientPage.module.scss";
import { PetsClient } from "widgets/PetsClient";
import { RecordsList } from "widgets/RecordsList";

const pets = [
  {
    id: 1,
    type: "Кошка",
    name: "Буська",
  },
  {
    id: 2,
    type: "Собака",
    name: "Амур",
  },
  {
    id: 3,
    type: "Собака",
    name: "Амур",
  },
];

const ClientPage = () => {
  return (
    <div className={cls.ProfilePage}>
      <PetsClient pets={pets} />
      <RecordsList />
    </div>
  );
};

export default ClientPage;
