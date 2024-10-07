import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getUserName = (state: StateSchema) => state?.regist.username;