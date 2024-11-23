import { AddPetsSchema } from "./model/type/type";
import { AddPetsReducer } from "./model/slice/AddPetsSlice";
import { AddPetsActions } from "./model/slice/AddPetsSlice";
import { addPetPost } from "./model/service/addPet";
import { getError } from "./model/selectors/getError";
import { getPet } from "./model/selectors/getPet";
import { Pet } from "./model/type/type";
import { getResult } from "./model/selectors/getResult";
export {
  type AddPetsSchema,
  AddPetsReducer,
  AddPetsActions,
  addPetPost,
  getError,
  getPet,
  getResult,
  type Pet,
};
