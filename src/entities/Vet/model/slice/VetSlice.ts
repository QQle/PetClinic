import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Records, VetSchema } from "../type/type";
import { getRecordsByVet } from "../service/getRecordsByVet";
const initialState: VetSchema = {
  vetID: "",
  isAuth: false,
  isLoading: false,
  error: "",
  records: [],
};
export const VetSlice = createSlice({
  name: "Vet",
  initialState,
  reducers: {
    setIsAccept: (state, action) => {
      state.records = state.records.map((record) =>
        record.id === action.payload
          ? { ...record, isAccept: !record.isAccept }
          : record
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecordsByVet.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        getRecordsByVet.fulfilled,
        (state, action: PayloadAction<Records[]>) => {
          state.isLoading = false;
          state.records = action.payload;
        }
      )
      .addCase(getRecordsByVet.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Произошла ошибка";
      });
  },
});

export const { actions: VetActions } = VetSlice;
export const { reducer: VetReducer } = VetSlice;
