import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getPhone = (state: StateSchema) => state?.regist.phone;
