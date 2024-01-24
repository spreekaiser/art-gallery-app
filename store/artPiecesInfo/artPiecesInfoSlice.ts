import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { useImmerLocalStorageState } from "../../lib/hooks/useImmerLocalStorageState";
import { UseImmerLocalStorageStateType } from "../../types/types";

interface IArtPiecesInfoState {
  artPiecesInfoState: string[];
}

const initialState: IArtPiecesInfoState = {
  artPiecesInfoState: [],
};

export const artPiecesInfoSlice = createSlice({
  name: "artPiecesInfo",
  initialState,
  reducers: {
    setArtPiecesInfoState: (state, action: PayloadAction<string[]>) => {
      state.artPiecesInfoState = action.payload;
    },
  },
});

export const { setArtPiecesInfoState } = artPiecesInfoSlice.actions;

// useImmerLocalStorageState
export function useArtPiecesInfo() {
  const [
    artPiecesInfo,
    updateArtPiecesInfoLocally,
  ]: UseImmerLocalStorageStateType = useImmerLocalStorageState(
    "art-pieces-favorites",
    { defaultValue: [] }
  );

  function updateArtPiecesInfo(newState: string[]): void {
    setArtPiecesInfoState(newState);
    updateArtPiecesInfoLocally(newState);
  }

  return { artPiecesInfo, updateArtPiecesInfo };
}

export default artPiecesInfoSlice.reducer;
