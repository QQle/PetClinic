import cls from "./PetsClient.module.scss";
import cat from "../../../shared/assets/cat_icon.png";
import dog from "../../../shared/assets/dogs_icon.png";

interface IPet {
  id: number;
  type: string;
  name: string;
}

interface IPetsList {
  pets: IPet[];
}

const PetsClient: React.FC<IPetsList> = ({ pets }) => {
  return (
    <div className={cls.PetsList}>
      {pets.map((item) => (
        <div key={item.id} className={cls.Pet}>
          {item.type === "Кошка" ? (
            <img src={cat} className={cls.PetImg}></img>
          ) : (
            <img src={dog} className={cls.PetImg}></img>
          )}
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default PetsClient;
