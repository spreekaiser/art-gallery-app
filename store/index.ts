import { configureStore } from "@reduxjs/toolkit";
// import rooReducer from "./rootReducer";
import alarmReducer from "./alarm/alarmSlice";
import touchedPieceReducer from "./touchedPiece/touchedPieceSlice";
import artPiecesInfoReducer from "./artPiecesInfo/artPiecesInfoSlice";

const store = configureStore({
  reducer: {
    // rootReducer,
    alarm: alarmReducer,
    touchedPiece: touchedPieceReducer,
    artPiecesInfo: artPiecesInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
