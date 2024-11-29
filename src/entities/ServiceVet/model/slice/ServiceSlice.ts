import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ServiceSchema } from "../type/type";
import { getServices } from "../service/getServices";
import { getVeterinarian } from "../service/getVeterinarian";

const initialState: ServiceSchema = {
  isLoading: false,
  error: "",
  result: [],
  veterinarian: [],
};
export const ServiceSlice = createSlice({
  name: "Service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getServices.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload;
      })
      .addCase(getServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Произошла ошибка";
      })
      .addCase(getVeterinarian.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getVeterinarian.fulfilled, (state, action) => {
        state.isLoading = false;
        state.veterinarian = action.payload;
      })
      .addCase(getVeterinarian.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Произошла ошибка";
      });
  },
});

export const { actions: ServiceActions } = ServiceSlice;
export const { reducer: ServiceReducer } = ServiceSlice;
