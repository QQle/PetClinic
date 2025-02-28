import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getVet = (state: StateSchema) => state?.records?.NearestEntry;
