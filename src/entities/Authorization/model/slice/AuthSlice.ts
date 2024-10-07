import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthSchema } from '../type/type';
import { loginUser } from '../service/loginUser';


const initialState: AuthSchema = {
    error: undefined,
    isLoading: false,
    username: "",
    password: "",
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: { 
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
          },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
          },
     },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Неправильный логин или пароль';
            });
    },
});

export const { actions: AuthActions } =  AuthSlice;
export const { reducer: AuthReducer } =  AuthSlice;