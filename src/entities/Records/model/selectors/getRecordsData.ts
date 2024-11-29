import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getRecordsData = (state: StateSchema) => state?.records?.records;
