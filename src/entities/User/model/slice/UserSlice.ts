import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../type/type';
import { userService } from '../service/userLogout';


const initialState: UserSchema = {
    error: undefined,
    isLoading: false,
    userID: '',
    isAuth: false,
};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: { 
        setUser: (state, action) => {
            state.userID = action.payload;
            state.isAuth = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userService.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(userService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.userID = '';
            })
            .addCase(userService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: UserActions } =  UserSlice;
export const { reducer: UserReducer } =  UserSlice;