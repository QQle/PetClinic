import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const serviceData = (state: StateSchema) => state?.service?.result;
