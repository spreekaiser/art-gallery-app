import { configureStore } from "@reduxjs/toolkit";
// import rooReducer from "./rootReducer";
// import alarmReducer from "./alarm/alarmSlice";

const store = configureStore({
  reducer: {
    // rootReducer,
    // alarm: alarmReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
