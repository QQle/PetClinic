import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getRole = (state: StateSchema) => state?.user.role;
