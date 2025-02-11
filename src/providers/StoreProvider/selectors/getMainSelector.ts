import { StateScheme } from "../config/StateScheme";

export const getMainSelector = (state: StateScheme) => state.mainInfo.main;
