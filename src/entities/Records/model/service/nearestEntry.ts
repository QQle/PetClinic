import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "shared/api/api";
import axios, { AxiosError } from "axios";
import { UserActions } from "entities/User";
import { RecordsActions } from "../slice/RecordsSlice";

interface recordData {
  vet: string;
}

interface KnownError {
  message: string;
  description: string;
  code: number | undefined;
}

export const NearestEntry = createAsyncThunk(
  "NearestEntry",
  async (addRecordData: recordData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${baseUrl}Veterinarian/NearestEntry`,
        addRecordData.vet,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.data) {
        throw new Error();
      }

      thunkAPI.dispatch(RecordsActions.setNearestEntry(response.data));
      return response.data;
    } catch (e) {
      const error: AxiosError<KnownError> = e as any;
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
