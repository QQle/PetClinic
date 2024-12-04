import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const getVolunteers = createAsyncThunk(
    'get_volunteers',
    async (id: number, thunkAPI) => {
        try {
            const response = await $api.get(`https://6601a8069d7276a75551e685.mockapi.io/api/v1/mock?id=${id}`);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            return thunkAPI.rejectWithValue(error);
        }
    },
);