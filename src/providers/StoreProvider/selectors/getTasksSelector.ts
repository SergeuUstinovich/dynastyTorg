import { StateScheme } from "../config/StateScheme";

export const getTasksSelector = (state: StateScheme) => state.allTasks.tasks;
