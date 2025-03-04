import { useSelector } from "react-redux";
import { ProgressBar } from "..";
import { LvlType } from "../../types/LvlType";
import { Accordion } from "../../ui";
import ImageContainer from "../../utils/ImageContainer";
import style from "./ListLvl.module.scss";
import { getMainSelector } from "../../providers/StoreProvider/selectors/getMainSelector";
import { useEffect, useRef, useState } from "react";

const api_url = import.meta.env.VITE_API_BASE_URL;

export function ItemLvl(props: LvlType) {
  const { name, value_max, value_min, otrisovka_kv, sigma, info, infoLvl } =
    props;
  const user = useSelector(getMainSelector);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user?.my_rang.name === name) {
      setIsOpen(true);
      
    }
  }, [user, name]);

  useEffect(() => {
    if(isOpen && ref) {
      const timer = setTimeout(() => {
        ref.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isOpen])
  
  return (
    <div ref={ref}>
      <Accordion
        active={isOpen}
        descr={`${value_min}${
          value_max && value_max !== 0.01 ? ` - ${value_max}` : "+ "
        }кг`}
        title={name}
        progress={
          name !== "Новичок" && (
            <ProgressBar
              otrisovka_kv={otrisovka_kv}
              value_min={value_min}
              value_max={value_max}
            />
          )
        }
      >
        <div className={style.boxInfo}>
          <ImageContainer
            className={style.img}
            src={`${api_url}/${sigma}`}
            x1x16
          />
          <p className={style.descr}>{info}</p>
          <ul className={style.itemList}>
            {infoLvl?.map((item, index) => (
              <li className={style.itemItem} key={index}>
                <h3 className={style.itemTitle}>
                  {index + 1}. {item.title}
                </h3>
                <p className={style.itemDescr}>{item.descr}</p>
              </li>
            ))}
          </ul>
        </div>
      </Accordion>
    </div>
  );
}
