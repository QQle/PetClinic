import React, { useEffect, useState } from "react";
import cls from "./ClientPage.module.scss";
import { PetsClient } from "widgets/PetsClient";
import { RecordsList } from "widgets/RecordsList";
import Button from "shared/UI/Button/Button";
import Modal from "shared/UI/Modal/Modal";
import { SignUpForms } from "widgets/SignupForms";
import { FormAddPet } from "widgets/AddPet";
import { getError, getPet } from "entities/AddPets";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getRecords, getRecordsData } from "entities/Records";
import { USER_LOCALSTORAGE_ID } from "shared/const/localStorage";
import { getDataPetsByOwner, getPetsByOwner } from "entities/User";

const ClientPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const userIDLS = localStorage.getItem(USER_LOCALSTORAGE_ID);
    let userID = JSON.parse(userIDLS || "0");
    dispatch(getRecords(userID));
    dispatch(getPetsByOwner(userID));
  }, [dispatch]);

  const [visible, setVisible] = useState<boolean>(false);
  const [visibleAdd, setVisibleAdd] = useState<boolean>(false);

  const addPetError = useSelector(getError) || "";
  const addPet = useSelector(getPet);
  const records = useSelector(getRecordsData);
  const petsData = useSelector(getDataPetsByOwner);
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
      <RecordsList records={records} />
      <Modal visible={visible} setVisible={setVisible}>
        <SignUpForms />
      </Modal>
      <Modal visible={visibleAdd} setVisible={setVisibleAdd}>
        <FormAddPet addPet={addPet} addPetError={addPetError} />
      </Modal>
    </div>
  );
};

export default ClientPage;
