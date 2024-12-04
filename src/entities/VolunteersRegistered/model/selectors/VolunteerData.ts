import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const VolunteerData = (state: StateSchema) => state?.volunteers.result;
