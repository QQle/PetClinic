import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getPet = (state: StateSchema) => state?.addPet.pets;
