import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../../../../common/utils/toggleSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer, // It should match the key used in rootReducer!
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
