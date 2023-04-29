import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dbase from "../store/data.json";
import { IBase } from "../types/models";

const initialState: IBase = dbase;
const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    currentStepAction: (state, action: PayloadAction<number>) => ({
      ...state,
      currentStep: action.payload,
    }),
  },
});

export const { currentStepAction } = stepsSlice.actions;

export default stepsSlice.reducer;
