import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RecordSchema } from "../type/type";
import { getRecords } from "../service/getRecords";
const initialState: RecordSchema = {
  error: "",
  isLoading: false,
  records: [],
  addRecords: [],
};

export const RecordsSlice = createSlice({
  name: "Records",
  initialState,
  reducers: {
    setRecords: (state, action) => {
      state.records = { ...state.records, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecords.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getRecords.fulfilled, (state, action) => {
        state.isLoading = false;
        state.records = action.payload;
      })
      .addCase(getRecords.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload == "string"
            ? action.payload
            : "Произошла ошибка";
      });
  },
});

export const { actions: RecordsActions } = RecordsSlice;
export const { reducer: RecordsReducer } = RecordsSlice;
