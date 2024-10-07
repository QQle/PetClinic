import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getError = (state: StateSchema) => state?.auth.error;