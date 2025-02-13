import { arrDeliveryType } from "../pages/Delivery/dataDelivery";
import { DostavkiType } from "../types/MainType";

export function mergeDeliveries(
  apiData: DostavkiType[],
  localData: arrDeliveryType[]
) {
  return localData.map((localItem) => {
    const apiItem = apiData.find((item) => item.id.toString() === localItem.id);
    if (apiItem) {
      return {
        ...localItem,
        format: {
          ...localItem.format,
          deliveryFormat: localItem.format.deliveryFormat.map(
            (formatItem, index) => {
              if (index === 0) {
                // Добавляем данные для стандартной доставки
                return {
                  ...formatItem,
                  price: apiItem.standart_price,
                  ot_day: apiItem.standart_ot_day,
                  do_day: apiItem.standart_do_day,
                };
              } else if (index === 1) {
                // Добавляем данные для экспресс-доставки
                return {
                  ...formatItem,
                  price: apiItem.express_price,
                  ot_day: apiItem.express_ot_day,
                  do_day: apiItem.express_do_day,
                };
              }
              return formatItem;
            }
          ),
        },
      };
    }
    return localItem;
  });
}
