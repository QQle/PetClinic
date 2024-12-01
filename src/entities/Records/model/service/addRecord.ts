import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "shared/api/api";
import axios, { AxiosError } from "axios";
import { UserActions } from "entities/User";

interface recordData {
  userId: string;
  petId: string;
  veterinarianId: string;
  favorsId: string;
  dateOfAdmission: Date;
}

interface KnownError {
  message: string;
  description: string;
  code: number | undefined;
}

export const addRecord = createAsyncThunk(
  "addRecord",
  async (addRecordData: recordData, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}Pet/InsertNewPet`, {
        userId: addRecordData.userId,
        petId: addRecordData.petId,
        veterinarianId: addRecordData.veterinarianId,
        favorsId: addRecordData.favorsId,
        dateOfAdmission: addRecordData.dateOfAdmission,
      });

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      const error: AxiosError<KnownError> = e as any;
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
