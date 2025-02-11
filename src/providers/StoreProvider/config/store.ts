import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateScheme } from "./StateScheme";
import { mainReducer } from "../slice/mainSlice";
import { myOrderReducer } from "../slice/myOrderSlice";


export function createReduxStore(initialState?: StateScheme) {
  const rootReducer: ReducersMapObject<StateScheme> = {
    mainInfo: mainReducer,
    myOrderInfo: myOrderReducer,
  };

  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
