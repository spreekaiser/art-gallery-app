import { configureStore } from "@reduxjs/toolkit";
// import rooReducer from "./rootReducer";
import alarmReducer from "./alarm/alarmSlice";
import touchedPieceReducer from "./touchedPiece/touchedPieceSlice";

const store = configureStore({
  reducer: {
    // rootReducer,
    alarm: alarmReducer,
    touchedPiece: touchedPieceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
