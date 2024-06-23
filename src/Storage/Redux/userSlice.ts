import { createSlice } from "@reduxjs/toolkit";
import IUserModel from "../../Interface/IUserMode";

export const emptyUserState: IUserModel = {
  username: "",
  role: "",
};

const userSlice = createSlice({
  name: "userAuth",
  initialState: emptyUserState,
  reducers: {
    setLoggedInUser: (state, action) => {
      console.log(action.payload.userName + action.payload.role);
      state.username = action.payload.username;
      state.role = action.payload.role;
    },
  },
});

export const { setLoggedInUser } = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
