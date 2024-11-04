import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VetSchema } from "../type/type";

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

export const { actions: VetActions } = VetSlice;
export const { reducer: VetReducer } = VetSlice;
