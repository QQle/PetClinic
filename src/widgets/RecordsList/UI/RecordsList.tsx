import cls from "./RecordsList.module.scss";

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
];
const RecordsList = () => {
  return (
    <div className={cls.records}>
      {data.map((item) => (
        <div key={item.id} className={cls.record}>
          {item.id}
        </div>
      ))}
    </div>
  );
};

export default RecordsList;
