import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { AuthReducer } from "entities/Authorization";
import { RegistReducer } from "entities/Registration";
import { UserReducer } from "entities/User";
import { PetsRegisteredReducer } from "entities/PetsRegistered";
import { VetReducer } from "entities/Vet";
import { StateSchema } from "./stateShema";

export function createRootStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    auth: AuthReducer,
    regist: RegistReducer,
    user: UserReducer,
    pets: PetsRegisteredReducer,
    vet: VetReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}

export type AppDispatch = ReturnType<typeof createRootStore>["dispatch"];
