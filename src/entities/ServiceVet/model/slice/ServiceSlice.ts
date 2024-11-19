import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ServiceSchema } from "../type/type";

const initialState: ServiceSchema = {
  isLoading: false,
  error: "",
  result: [],
};
export const ServiceSlice = createSlice({
  name: "Service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder
    //     .addCase(getPets.pending, (state) => {
    //         state.error = undefined;
    //         state.isLoading = true;
    //     })
    //     .addCase(getPets.fulfilled, (state, action: PayloadAction<Pets[]>) => {
    //         state.isLoading = false;
    //         state.result = action.payload;
    //     })
    //     .addCase(getPets.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
    //     })
  },
});

export const { actions: ServiceActions } = ServiceSlice;
export const { reducer: ServiceReducer } = ServiceSlice;
