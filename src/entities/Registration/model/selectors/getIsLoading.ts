import { StateSchema } from "app/providers/storeProvider/config/stateShema";

export const getIsLoading = (state: StateSchema) => state?.regist.isLoading;