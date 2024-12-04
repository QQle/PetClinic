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
    return (
      <div className={cls.vetPage}>
        <div className={cls.vetPage_empty}>Записей не найдено</div>
      </div>
    );
  }

  return (
    <div className={cls.vetPage}>
      {records.map((item) => (
        <div className={cls.vetPage_card} key={item.id}>
          <div>
            <div>
              Питомец: <b>{item.petName}</b>
            </div>
            <div>
              Ветеринар: <b>{item.veterinarianName}</b>
            </div>
            <div>
              Прием: <b>{item.serviceName}</b>
            </div>
            <div>
              Дата: <b>{new Date(item.dateOfAdmission).toLocaleDateString()}</b>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecordsList;
