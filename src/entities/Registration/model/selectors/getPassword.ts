import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getPassword = (state: StateSchema) => state?.regist.password;