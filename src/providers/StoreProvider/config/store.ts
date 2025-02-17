import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateScheme } from "./StateScheme";
import { mainReducer } from "../slice/mainSlice";
import { myOrderReducer } from "../slice/myOrderSlice";
import { tasksReducer } from "../slice/tasksSlice";
import { lvlReducer } from "../slice/lvlSlice";


export function createReduxStore(initialState?: StateScheme) {
  const rootReducer: ReducersMapObject<StateScheme> = {
    mainInfo: mainReducer,
    myOrderInfo: myOrderReducer,
    allTasks: tasksReducer,
    allLvl: lvlReducer,
  };

  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
