import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/userAction";

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
};

const updatedSlice = createSlice({
  name: "updated",
  initialState,
  reducers: {},
  //* thunk aksiyonunun "pending" / "rejected" / "fulfilled" aksiyonları tetiklendiğinde storeu nasıl
  //* etkileyeceğini söyleyebilmek için extraReducers kullanılır
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.users = action.payload;
    });
  },
});

export default updatedSlice.reducer;
