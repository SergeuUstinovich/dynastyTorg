import { StateScheme } from "../config/StateScheme";

export const getMyOrderSelector = (state: StateScheme) =>
  state.myOrderInfo.myOrder;
