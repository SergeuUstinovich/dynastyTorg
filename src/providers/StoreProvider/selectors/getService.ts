import { StateScheme } from "../config/StateScheme";

export const getServiceSelector = (state: StateScheme) => state.service.active;
