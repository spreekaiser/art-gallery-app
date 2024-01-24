import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { IPiece } from "../../types/types";

interface IDataState {
  data: IPiece[];
  //   exampleData: IPiece[];
  //   carloData: IPiece[];
}

const initialState: IDataState = {
  data: [],
  //   exampleData: [],
  //   carloData: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IPiece>) => {
      state.data = [...state.data, action.payload];
      //   return [...state, action.payload];
    },
  },
});

export const { setData } = dataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectData = (state: RootState) => state.data.data;

export default dataSlice.reducer;
