import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";
import { AxiosError } from "axios";

interface KnownError {
  message: string;
  description: string;
  code: number | undefined;
}

export const getServices = createAsyncThunk(
  "get_services",
  async (_, thunkAPI) => {
    try {
      const response = await $api.get(`Favors/GetAllFavors`);
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
