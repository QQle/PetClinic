import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";
import { AxiosError } from "axios";

interface KnownError {
  message: string;
  description: string;
  code: number | undefined;
}

export const getRecords = createAsyncThunk(
  "get_records",
  async (id: string, thunkAPI) => {
    try {
      const response = await $api.post(`User/GetAllUserBids`, id, {
        headers: {
          "Content-Type": "application/json",
        },
      });
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
