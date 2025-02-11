import { useParams } from "react-router";
import style from "./ItemOrders.module.scss";
import { CircleSvg } from "../../assets/svg";
import { ContainerSwiper, TitlePage } from "../../components";
import { useSelector } from "react-redux";
import { getMyOrderSelector } from "../../providers/StoreProvider/selectors/getMyOrderSelector";
import { useEffect, useState } from "react";
import { MyOrdersItemType } from "../../types/MyOrdersType";
import { getOrderStatus, isActive } from "../../helpers/getOrderStatus";
import { formatDate } from "../../helpers/formateDate";
import { CustomSwiper } from "../../ui";
import ImageContainer from "../../utils/ImageContainer";

const api_url = import.meta.env.VITE_API_BASE_URL;

function ItemOrders() {
  const { id } = useParams();
  const arrOrders = useSelector(getMyOrderSelector);
  const [items, setItems] = useState<MyOrdersItemType>();

  const config = {
    spaceBetween: 8,
    slidesPerView: items && items.image.length > 2 ? 2.4 : 2,
  };

  useEffect(() => {
    if (arrOrders) {
      const obj = [
        ...arrOrders.active_order,
        ...arrOrders.completed_order,
      ].find((item) => item.id === Number(id));
      setItems(obj);
    }
  }, [arrOrders, id]);

  return (
    <div className={style.box}>
      {items && (
        <TitlePage
          title={items.product}
          descr={`${items.number_of_order}: ${getOrderStatus(items)}`}
        />
      )}
      <div className={style.boxList}>
        <h2 className={style.titleList}>Статус заказа</h2>
        {items && (
          <ul className={style.list}>
            {items.created_status && (
              <li className={style.item}>
                <CircleSvg
                  className={`${style.svg} ${
                    isActive(items, "created_status") ? style.active : ""
                  }`}
                />
                <div>
                  <p
                    className={`${style.descr} ${
                      isActive(items, "created_status") ? style.active : ""
                    }`}
                  >
                    {items.created_status.name}
                  </p>
                  <p
                    className={`${style.descr} ${
                      isActive(items, "created_status") ? style.active : ""
                    }`}
                  >
                    {formatDate(items.created_status.datatime)}
                  </p>
                </div>
              </li>
            )}
            {items.in_progress_status && (
              <li className={style.item}>
                <CircleSvg
                  className={`${style.svg} ${
                    isActive(items, "in_progress_status") ? style.active : ""
                  }`}
                />
                <div>
                  <p
                    className={`${style.descr} ${
                      isActive(items, "in_progress_status") ? style.active : ""
                    }`}
                  >
                    {items.in_progress_status.name}
                  </p>
                  <p
                    className={`${style.descr} ${
                      isActive(items, "in_progress_status") ? style.active : ""
                    }`}
                  >
                    {formatDate(items.in_progress_status.datatime)}
                  </p>
                </div>
              </li>
            )}
            {items.completed_status && (
              <li className={style.item}>
                <CircleSvg
                  className={`${style.svg} ${
                    isActive(items, "completed_status") ? style.active : ""
                  }`}
                />
                <div>
                  <p
                    className={`${style.descr} ${
                      isActive(items, "completed_status") ? style.active : ""
                    }`}
                  >
                    {items.completed_status.name}
                  </p>
                  <p
                    className={`${style.descr} ${
                      isActive(items, "completed_status") ? style.active : ""
                    }`}
                  >
                    {formatDate(items.completed_status.datatime)}
                  </p>
                </div>
              </li>
            )}
          </ul>
        )}
      </div>
      {items && items.image.length > 0 && (
        <ContainerSwiper title="Фото" link={`/home-orders-info/${id}/photo`}>
          <CustomSwiper config={config}>
            {items.image.map((item, index) => (
              <div key={index} className={style.boxImg}>
                <ImageContainer
                  className={style.img}
                  src={`${api_url}/${item.image_url}`}
                  x1x16
                />
              </div>
            ))}
          </CustomSwiper>
        </ContainerSwiper>
      )}
    </div>
  );
}

export default ItemOrders;
