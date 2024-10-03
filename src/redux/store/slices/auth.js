import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../../mocks/auth";

const initialState = {
  user: {},
};

const slice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    getUser(state, action) {
      let data = { ...action.payload.data };
      state.user = data;
    },

    logoutUser(state) {
      state.user = {};
    },
  },
});

export const { reducer } = slice;

export const getUser = () => async (dispatch) => {
  const result = await authApi.getUser();
  if (result) {
    dispatch(slice.actions.getUser(result));
    return true;
  } else {
    return false;
  }
};

export const register = (data) => async () => {
  const result = await authApi.register(data);
  console.log("data in slice :", data);
  console.log("result in slice :", result);
  if (result) {
    return true;
  } else {
    return false;
  }
};

export const login = (data) => async () => {
  const result = await authApi.login(data);
  if (result) {
    return true;
  } else {
    return false;
  }
};

export const logout = () => async (dispatch) => {
  dispatch(slice.actions.logoutUser());
  return true;
};
