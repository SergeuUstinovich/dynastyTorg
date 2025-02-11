import { Link } from "react-router";
import style from "./ListOrders.module.scss";
import { Button } from "../../ui/Button";
import { ArrowSvg, ServicesSvg } from "../../assets/svg";
import { MyOrdersItemType } from "../../types/MyOrdersType";
import { getOrderStatus } from "../../helpers/getOrderStatus";

export function ListOrders({arr}: {arr: MyOrdersItemType[]} ) {
  
  return (
    <>
      {arr.length > 0 ? (
        <ul className={style.list}>
          {arr.map((item) => (
            <li key={item.id} className={style.item}>
              <Link className={style.link} to={`/home-orders-info/${item.id}`}>
                <div className={style.boxInfo}>
                  <h2 className={style.title}>{item.product}</h2>
                  <p className={style.descr}>
                    {item.number_of_order}: <span className={style.span}>{getOrderStatus(item)}</span>
                  </p>
                </div>
                <Button className={style.btn}>
                  <ArrowSvg />
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className={style.boxNotArr}>
          <ServicesSvg className={style.svgNotArr} />
          <h2 className={style.titleNotArr}>Нет заказов</h2>
          <p className={style.descrNotArr}>Ой, похоже у вас ещё нет заказов</p>
          <Button className={style.btnNotArr}>Заказать</Button>
        </div>
      )}
    </>
  );
}
