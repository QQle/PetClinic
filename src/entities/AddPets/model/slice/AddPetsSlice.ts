import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddPetsSchema } from "../type/type";
import { addPetPost } from "../service/addPet";

const initialState: AddPetsSchema = {
  error: "",
  isLoading: false,
  result: "",
  pets: {
    type: "",
    gender: "",
    age: 0,
    sterilized: false,
    vaccinated: false,
    name: "",
    ownerId: "",
  },
};

export const addPetsSlice = createSlice({
  name: "addPets",
  initialState,
  reducers: {
    setPets: (state, action: PayloadAction<Partial<typeof state.pets>>) => {
      state.pets = { ...state.pets, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPetPost.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(addPetPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload;
      })
      .addCase(addPetPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload == "string"
            ? action.payload
            : "Произошла ошибка";
      });
  },
});

export const { actions: AddPetsActions } = addPetsSlice;
export const { reducer: AddPetsReducer } = addPetsSlice;
