import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: null,
  users: [],
};

const classicSlice = createSlice({
  name: "classic",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    setUsers: (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.users = action.payload;
    },
  },
});

export default classicSlice.reducer;

export const { setLoading, setError, setUsers } = classicSlice.actions;
