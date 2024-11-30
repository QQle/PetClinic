import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getDataPetsByOwner = (state: StateSchema) => state?.user?.pets;
