import { dataLvl } from "../pages/Lvling/dataLvl";
import { LvlType } from "../types/LvlType";

export function addInfoLvlToData(serverData: LvlType[]): LvlType[] {
  if (!serverData) return serverData;

  const updatedLvl = serverData.map((item) => {
    const found = dataLvl.find((dataItem) => dataItem.name === item.name);
    if (found) {
      return { ...item, infoLvl: found.infoLvl };
    }
    return item;
  });
  return updatedLvl
}
