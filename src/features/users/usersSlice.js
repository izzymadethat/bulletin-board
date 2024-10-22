import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "John Doe", email: "johndoe@example.com" },
  { id: "1", name: "Jane Doe", email: "janedoe@example.com" },
  { id: "2", name: "Bob Smith", email: "bobsmith@example.com" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
