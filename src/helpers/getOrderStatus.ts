import { MyOrdersItemType } from "../types/MyOrdersType";

export function getOrderStatus(order: MyOrdersItemType): string {
  if (order.completed_status) {
    return order.completed_status.name;
  } else if (order.in_progress_status) {
    return order.in_progress_status.name;
  } else if (order.created_status) {
    return order.created_status.name;
  } else {
    return "Нет информации";
  }
}

export function isActive(
  order: MyOrdersItemType,
  status: keyof MyOrdersItemType
): boolean {
  if (status === "completed_status" && order.completed_status) {
    return true;
  }
  if (
    status === "in_progress_status" &&
    order.in_progress_status &&
    !order.completed_status
  ) {
    return true;
  }
  if (
    status === "created_status" &&
    order.created_status &&
    !order.in_progress_status &&
    !order.completed_status
  ) {
    return true;
  }
  return false;
}
