import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const vetData = (state: StateSchema) => state?.service?.veterinarian;
