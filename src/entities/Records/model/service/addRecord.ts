import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "shared/api/api";
import axios, { AxiosError } from "axios";
import { UserActions } from "entities/User";
import { RecordsActions } from "../slice/RecordsSlice";

interface recordData {
  userId: string;
  petId: string;
  veterinarianId: string;
  favorsId: string;
  dateOfAdmission: string;
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
      const response = await axios.post(`${baseUrl}Bid/createBid`, {
        userId: addRecordData.userId,
        petId: addRecordData.petId,
        veterinarianId: addRecordData.veterinarianId,
        favorsId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        dateOfAdmission: "2024-12-01T17:30:44.435Z",
      });

      if (!response.data) {
        throw new Error();
      }

      const recordsResponse = await axios.post(
        `${baseUrl}User/GetAllUserBids`,
        addRecordData.userId,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      thunkAPI.dispatch(RecordsActions.setRecords(recordsResponse.data));
      return response.data;
    } catch (e) {
      const error: AxiosError<KnownError> = e as any;
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
