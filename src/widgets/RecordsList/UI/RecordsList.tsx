import cls from "./RecordsList.module.scss";

interface RecordsListProps {
  records: Array<{
    id: string;
    petName: string;
    veterinarianName: string;
    serviceName: string;
    dateOfAdmission: Date;
  }>;
}

const RecordsList: React.FC<RecordsListProps> = ({ records }) => {
  if (!records.length) {
    return <div className={cls.vetPage_empty}>Записей не найдено</div>;
  }
  return (
    <div className={cls.vetPage}>
      {records.map((item) => (
        <div className={cls.vetPage_card} key={item.id}>
          <div>
            <div>{item.petName}</div>
            <div>Ветеринар: {item.veterinarianName}</div>
            <div>Прием: {item.serviceName}</div>
            <div>
              Дата приема:{" "}
              {item.dateOfAdmission.toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecordsList;
