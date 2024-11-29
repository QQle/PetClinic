import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";
import { AxiosError } from "axios";

interface KnownError {
  message: string;
  description: string;
  code: number | undefined;
}

export const getVeterinarian = createAsyncThunk(
  "get_veterinarian",
  async (_, thunkAPI) => {
    try {
      const response = await $api.get(`Veterinarian/GetAllVeterinarian`);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      const error: AxiosError<KnownError> = e as any;
      return thunkAPI.rejectWithValue(error);
    }
  }
);
