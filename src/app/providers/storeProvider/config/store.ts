import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { AuthReducer } from 'entities/Authorization';
import { RegistReducer } from 'entities/Registration';
import { UserReducer } from 'entities/User';

import { StateSchema } from './stateShema';

export function createRootStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        auth: AuthReducer,
        regist: RegistReducer,
        user: UserReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createRootStore>['dispatch']