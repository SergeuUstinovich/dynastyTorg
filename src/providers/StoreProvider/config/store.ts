import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateScheme } from "./StateScheme";
import { mainReducer } from "../slice/mainSlice";
import { myOrderReducer } from "../slice/myOrderSlice";
import { tasksReducer } from "../slice/tasksSlice";


export function createReduxStore(initialState?: StateScheme) {
  const rootReducer: ReducersMapObject<StateScheme> = {
    mainInfo: mainReducer,
    myOrderInfo: myOrderReducer,
    allTasks: tasksReducer,
  };

  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
