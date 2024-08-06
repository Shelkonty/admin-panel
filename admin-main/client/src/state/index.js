import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  user: "63701cc1f03239b7f700000e",
  token: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setMode, setUser, clearUser } = globalSlice.actions;

export default globalSlice.reducer;
