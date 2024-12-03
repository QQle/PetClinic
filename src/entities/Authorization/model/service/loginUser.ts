import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "shared/api/api";
import axios, { AxiosError } from "axios";
import {
  USER_LOCALSTORAGE_ID,
  USER_LOCALSTORAGE_REFRESH,
  USER_LOCALSTORAGE_ROLE,
  USER_LOCALSTORAGE_TOKEN,
  USER_LOCALSTORAGE_USERNAME,
} from "shared/const/localStorage";
import { UserActions } from "entities/User";

interface AuthData {
  name: string;
  password: string;
}

interface KnownError {
  message: string;
  description: string;
  code: number | undefined;
}

export const loginUser = createAsyncThunk(
  "login",
  async (authData: AuthData, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}User/Login`, {
        userName: authData.name,
        password: authData.password,
      });

      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(
        USER_LOCALSTORAGE_USERNAME,
        JSON.stringify(authData.name)
      );
      localStorage.setItem(
        USER_LOCALSTORAGE_TOKEN,
        JSON.stringify(response.data.jwt)
      );
      localStorage.setItem(
        USER_LOCALSTORAGE_REFRESH,
        JSON.stringify(response.data.refresh)
      );
      localStorage.setItem(
        USER_LOCALSTORAGE_ID,
        JSON.stringify(response.data.currentUser)
      );
      localStorage.setItem(
        USER_LOCALSTORAGE_ROLE,
        JSON.stringify(response.data.role)
      );
      thunkAPI.dispatch(UserActions.setUser(response.data.currentUser));
      if (!(response.data.role === "user")) {
        thunkAPI.dispatch(UserActions.setRole(response.data.role));
      }
      return response.data;
    } catch (e) {
      const error: AxiosError<KnownError> = e as any;
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
