import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LvlScheme, LvlType } from "../../../types/LvlType";

const initialState: LvlScheme = {};

export const lvlSlice = createSlice({
  name: "lvl",
  initialState,
  reducers: {
    lvlData: (state, action: PayloadAction<LvlType[]>) => {
      state.lvl = action.payload;
    },
  },
});

export const { actions: lvlActions } = lvlSlice;
export const { reducer: lvlReducer } = lvlSlice;
