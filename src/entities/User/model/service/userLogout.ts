import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';
import { USER_LOCALSTORAGE_ID, USER_LOCALSTORAGE_REFRESH, USER_LOCALSTORAGE_TOKEN } from 'shared/const/localStorage';

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const userService = createAsyncThunk(
    'user_logout',
    async (_,thunkAPI) => {
        try {
            const response = await $api.post('/logout');

            if (!response.data) {
                throw new Error();
            }
            localStorage.removeItem(USER_LOCALSTORAGE_TOKEN);
            localStorage.removeItem(USER_LOCALSTORAGE_REFRESH);
            localStorage.removeItem(USER_LOCALSTORAGE_ID);
            return response.data;
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            alert(error.message);
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);