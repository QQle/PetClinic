import { siginUser } from "./model/service/signInUser";
import { RegistReducer } from "./model/slice/RegistrationSlice";
import { RegistActions } from "./model/slice/RegistrationSlice";
import { RegistSchema } from "./model/type/type";
import { getIsLoading } from "./model/selectors/getIsLoading";
import { getUserName } from "./model/selectors/getUserName";
import { getPassword } from "./model/selectors/getPassword";
import { getEmail } from "./model/selectors/getEmail";
import { getError } from "./model/selectors/getError";

export { type RegistSchema, siginUser, RegistActions, RegistReducer,
        getIsLoading, getUserName, getPassword, getEmail, getError};