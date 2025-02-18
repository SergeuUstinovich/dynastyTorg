import { LvlScheme } from "../../../types/LvlType";
import { MainScheme } from "../../../types/MainType";
import { MyOrdersScheme } from "../../../types/MyOrdersType";
import { TasksScheme } from "../../../types/TasksType";

export interface StateScheme {
    mainInfo: MainScheme;
    myOrderInfo: MyOrdersScheme;
    allTasks: TasksScheme;
    allLvl: LvlScheme;
}
