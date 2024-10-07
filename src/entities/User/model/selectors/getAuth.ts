import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getAuth = (state: StateSchema) => state?.user.isAuth;