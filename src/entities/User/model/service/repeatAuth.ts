import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { USER_LOCALSTORAGE_TOKEN, USER_LOCALSTORAGE_REFRESH } from 'shared/const/localStorage';
import { UserActions } from '../slice/UserSlice';
import { baseUrl } from 'shared/api/api';

interface Token {
    accessToken: string;
    refreshToken: string;
    userid: string;
}

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const repeatAuth = createAsyncThunk<Token, { accessToken: string; refreshToken: string }, { rejectValue: string }>(
    'user_repAuth',
    async ({ accessToken, refreshToken }, thunkAPI) => {
        try {
            const response = await axios.post<Token>(`${baseUrl}User/RefreshToken`, {
                accsessToken: JSON.parse(accessToken),
                refreshToken: JSON.parse(refreshToken)
            });

            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(
                USER_LOCALSTORAGE_TOKEN,
                JSON.stringify(response.data.accessToken)
              );
              localStorage.setItem(
                USER_LOCALSTORAGE_REFRESH,
                JSON.stringify(response.data.refreshToken)
              );
              thunkAPI.dispatch(UserActions.setUser(response.data.userid));
            return response.data;
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            alert(error.message);
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);