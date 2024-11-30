import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";
import { AxiosError } from "axios";
import { UserActions } from "../slice/UserSlice";

interface KnownError {
  message: string;
  description: string;
  code: number | undefined;
}

export const getPetsByOwner = createAsyncThunk(
  "get_PetsByOwner",
  async (id: string, thunkAPI) => {
    try {
      const response = await $api.post(`Pet/GetPetsByOwner`, id, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.data) {
        throw new Error("Данные отсутствуют");
      }
      return thunkAPI.dispatch(UserActions.setPets(response.data));
    } catch (e) {
      const error: AxiosError<KnownError> = e as any;
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
