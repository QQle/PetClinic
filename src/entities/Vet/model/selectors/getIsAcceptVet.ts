import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getIsAcceptVet = (state: StateSchema) =>
  state?.vet?.records?.find((item) => item.isAccept);
