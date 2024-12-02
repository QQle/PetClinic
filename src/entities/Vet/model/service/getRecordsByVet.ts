import { asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { baseUrl } from "shared/api/api";

interface KnownError {
  message: string;
  description: string;
  code: number | undefined;
}

export const getRecordsByVet = createAsyncThunk(
  "get_records",
  async (userID: string, thunkAPI) => {
    try {
      const response = await axios.post(
        `${baseUrl}Veterinarian/GetVeterinarianBids`,
        userID,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.data) {
        throw new Error("Данные отсутствуют");
      }
      return response.data;
    } catch (e) {
      const error: AxiosError<KnownError> = e as any;
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
