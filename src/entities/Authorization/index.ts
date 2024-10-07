import { AuthReducer } from "./model/slice/AuthSlice";
import { AuthActions } from "./model/slice/AuthSlice";
import { AuthSchema } from "./model/type/type";
import { getIsLoading } from "./model/selectors/getIsLoading";
import { getUserName } from "./model/selectors/getUserName";
import { getPassword } from "./model/selectors/getPassword";
import { getError } from "./model/selectors/getError";
export {type AuthSchema, getError, AuthReducer, AuthActions, getIsLoading, getPassword, getUserName};