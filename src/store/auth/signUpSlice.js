import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    registerRequest: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { registerRequest, registerSuccess, registerFailure } =
  registerSlice.actions;

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(registerRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://localhost:5000/api/users/register`,
      { name, email, password },
      config
    );

    dispatch(registerSuccess(data));
  } catch (err) {
    const message =
      err.response && err.response.data.data.message
        ? err.response.data.message
        : err.message;
    dispatch(registerFailure(message));
  }
};

export default registerSlice.reducer;
