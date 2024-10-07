import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getEmail = (state: StateSchema) => state?.regist.email;