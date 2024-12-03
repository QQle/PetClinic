import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { baseUrl } from "shared/api/api";
import { VetActions } from "../slice/VetSlice";
import toast from "react-hot-toast";

interface KnownError {
  message: string;
  description: string;
  code: number | undefined;
}

export const postRecords = createAsyncThunk(
  "post_recordsAccept",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.patch(
        `${baseUrl}Veterinarian/AcceptBids`,
        id,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.data) {
        throw new Error("Данные отсутствуют");
      }
      toast.success("Заявка принята");
      thunkAPI.dispatch(VetActions.setIsAccept(id));
    } catch (e) {
      toast.error("Заявка не принята");
      const error: AxiosError<KnownError> = e as any;
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
