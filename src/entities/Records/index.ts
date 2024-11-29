import { RecordSchema } from "./model/type/type";
import { getRecords } from "./model/service/getRecords";
import { RecordsActions } from "./model/slice/RecordsSlice";
import { RecordsReducer } from "./model/slice/RecordsSlice";
import { getRecordsData } from "./model/selectors/getRecordsData";
export {
  type RecordSchema,
  getRecords,
  RecordsActions,
  RecordsReducer,
  getRecordsData,
};
