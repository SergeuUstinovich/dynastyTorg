import { ItemLvl } from "..";
import { LvlType } from "../../types/LvlType";
import style from "./ListLvl.module.scss";

export function ListLvl({ arr, kg }: { arr: LvlType[], kg: number }) {
   
  return (
    <ul className={style.list}>
      {arr.map((item, index) => (
        <li className={style.item} key={index}>
          <ItemLvl
            value_max={item.value_max}
            value_min={item.value_min}
            name={item.name}
            sigma={item.sigma}
            otrisovka_kv={kg}
            info={item.info}
            sale={item.sale}
            infoLvl={item.infoLvl}
          />
        </li>
      ))}
    </ul>
  );
}
