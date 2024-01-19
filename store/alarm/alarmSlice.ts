import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "..";

interface IAlarmState {
  isAlarm: boolean;
}

const initialState: IAlarmState = {
  isAlarm: false,
};

export const alarmSlice = createSlice({
  name: "alarm",
  initialState,
  reducers: {
    startAlarm: (state) => {
      state.isAlarm = true;
    },
    stopAlarm: (state) => {
      state.isAlarm = false;
    },
  },
});

export const { startAlarm, stopAlarm } = alarmSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAlarm = (state: RootState) => state.alarm.isAlarm;

export default alarmSlice.reducer;
