import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "..";

interface ITouchedPieceState {
  slug: string | null;
}

const initialState: ITouchedPieceState = {
  slug: null,
};

export const touchedPieceSlice = createSlice({
  name: "touchedPiece",
  initialState,
  reducers: {
    setTouchedPiece: (state, action: PayloadAction<string>) => {
      state.slug = action.payload;
    },
    resetTouchedPiece: (state) => {
      state.slug = null;
    },
  },
});

export const { setTouchedPiece, resetTouchedPiece } = touchedPieceSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTouchedPiece = (state: RootState) => state.touchedPiece.slug;

export default touchedPieceSlice.reducer;
