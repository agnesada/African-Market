import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    data: userFromStorage,
    error: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;

export const login = (email, password) => async ( dispatch) => {
  try {
    dispatch(loginRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://localhost:5000/api/users/login`,
      { email, password },
      config
    );

    dispatch(loginSuccess(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (err) {
    const message =
      err.response && err.response.data.data.message
        ? err.response.data.message
        : err.message;
    dispatch(loginFailure(message));
  }
};

export default loginSlice.reducer;
