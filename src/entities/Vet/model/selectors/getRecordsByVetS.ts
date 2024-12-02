import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getRecordsByVetS = (state: StateSchema) => state?.vet?.records;
