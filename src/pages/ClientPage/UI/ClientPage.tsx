import React, { useState } from "react";
import cls from "./ClientPage.module.scss";
import { PetsClient } from "widgets/PetsClient";
import { RecordsList } from "widgets/RecordsList";
import Button from "shared/UI/Button/Button";
import Modal from "shared/UI/Modal/Modal";
import { SignUpForms } from "widgets/SignupForms";
import { FormAddPet } from "widgets/AddPet";

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
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleAdd, setVisibleAdd] = useState<boolean>(false);

  const toggleVisible = () => {
    setVisible(true);
  };

  const toggleVisibleAdd = () => {
    setVisibleAdd(true);
  };

  return (
    <div className={cls.ProfilePage}>
      <div className={cls.buttons}>
        <Button onClick={toggleVisibleAdd}>Доб. питомца</Button>
        <Button onClick={toggleVisible}>Записаться на прием</Button>
      </div>
      {/* <PetsClient pets={pets} /> */}
      <RecordsList />
      <Modal visible={visible} setVisible={setVisible}>
        <SignUpForms />
      </Modal>
      <Modal visible={visibleAdd} setVisible={setVisibleAdd}>
        <FormAddPet />
      </Modal>
    </div>
  );
};

export default ClientPage;
