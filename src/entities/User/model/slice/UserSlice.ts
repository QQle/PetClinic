import { createSlice, isAction } from "@reduxjs/toolkit";
import { UserSchema } from "../type/type";
import { userService } from "../service/userLogout";

const initialState: UserSchema = {
  error: "",
  isLoading: false,
  userID: "",
  isAuth: false,
  role: "user",
  pets: [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userID = action.payload;
      state.isAuth = true;
    },
    setPets: (state, action) => {
      state.pets = action.payload;
    },
    addPet(state, action) {
      state.pets = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userService.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(userService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.userID = "";
      })
      .addCase(userService.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Произошла ошибка";
      });
  },
});

export const { actions: UserActions } = UserSlice;
export const { reducer: UserReducer } = UserSlice;
