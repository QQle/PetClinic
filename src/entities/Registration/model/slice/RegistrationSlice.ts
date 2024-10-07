import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RegistSchema } from '../type/type';
import { siginUser } from '../service/signInUser';


const initialState: RegistSchema = {
    error: "",
    isLoading: false,
    username: "",
    password: "",
    email: "",
};

export const RegistSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: { 
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
          },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
          },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
          },
     },
    extraReducers: (builder) => {
        builder
            .addCase(siginUser.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(siginUser.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(siginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error =  typeof action.payload == 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: RegistActions } =  RegistSlice;
export const { reducer: RegistReducer } =  RegistSlice;