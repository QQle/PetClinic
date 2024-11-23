import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getResult = (state: StateSchema) => state?.addPet.result;
