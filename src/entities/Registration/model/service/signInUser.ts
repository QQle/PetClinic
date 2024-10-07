import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from 'shared/api/api';
import axios, { AxiosError } from 'axios';

interface RegistData {
    name: string;
    password: string;
    email: string;
  }

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const siginUser = createAsyncThunk(
    'sigin',
    async (registData: RegistData, thunkAPI) => {
        try {
            const response = await axios.post(`${baseUrl}User/Registration`, 
            {
                userName: registData.name,
                //email: registData.email,
                password: registData.password,
            });
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    },
);