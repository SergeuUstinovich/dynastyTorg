import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceType } from "../../../types/SerivceType";

const initialState: ServiceType = {
  active: "delivery",
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setService: (state, action: PayloadAction<"delivery" | "package">) => {
      state.active = action.payload;
    },
  },
});

export const { actions: serviceActions } = serviceSlice;
export const { reducer: serviceReducer } = serviceSlice;
