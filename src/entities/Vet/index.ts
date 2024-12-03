import { VetSchema } from "./model/type/type";
import { VetActions } from "./model/slice/VetSlice";
import { VetReducer } from "./model/slice/VetSlice";
import { getRecordsByVet } from "./model/service/getRecordsByVet";
import { getRecordsByVetS } from "./model/selectors/getRecordsByVetS";
import { postRecords } from "./model/service/postRecords";
export {
  type VetSchema,
  VetActions,
  VetReducer,
  getRecordsByVetS,
  getRecordsByVet,
  postRecords,
};
