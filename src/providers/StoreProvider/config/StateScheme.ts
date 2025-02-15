import { MainScheme } from "../../../types/MainType";
import { MyOrdersScheme } from "../../../types/MyOrdersType";
import { TasksScheme } from "../../../types/TasksType";

export interface StateScheme {
    mainInfo: MainScheme;
    myOrderInfo: MyOrdersScheme;
    allTasks: TasksScheme;
}
