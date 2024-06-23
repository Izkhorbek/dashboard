import { configureStore } from "@reduxjs/toolkit";
import commentsApi from "../../Apis/commentsApi";
import hairdresserApi from "../../Apis/hairdresserApi";
import statisticApi from "../../Apis/mainStatisticsApi";
import userAppealInfoApi from "../../Apis/userAppealApi";
import userInfoApi from "../../Apis/userInfoApi";
import userLoginApi from "../../Apis/userLoginApi";
import userOrderApi from "../../Apis/userOrderApi";
import { userSliceReducer } from "./userSlice";

const store = configureStore({
  reducer: {
    //slice
    userSlice: userSliceReducer,
    //Enter here slices
    //api
    [hairdresserApi.reducerPath]: hairdresserApi.reducer,
    [userInfoApi.reducerPath]: userInfoApi.reducer,
    [userOrderApi.reducerPath]: userOrderApi.reducer,
    [userAppealInfoApi.reducerPath]: userAppealInfoApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [statisticApi.reducerPath]: statisticApi.reducer,
    [userLoginApi.reducerPath]: userLoginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(hairdresserApi.middleware)
      .concat(userInfoApi.middleware)
      .concat(userOrderApi.middleware)
      .concat(userAppealInfoApi.middleware)
      .concat(commentsApi.middleware)
      .concat(statisticApi.middleware)
      .concat(userLoginApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
