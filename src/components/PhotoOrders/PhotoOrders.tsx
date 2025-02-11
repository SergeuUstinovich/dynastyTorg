import { Link, useParams } from "react-router";
import { TitlePage } from "..";
import style from "./PhotoOrders.module.scss";
import ImageContainer from "../../utils/ImageContainer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMyOrderSelector } from "../../providers/StoreProvider/selectors/getMyOrderSelector";
import { MyOrdersItemType } from "../../types/MyOrdersType";

const api_url = import.meta.env.VITE_API_BASE_URL;

function PhotoOrders() {
  const { id } = useParams();
  const arrOrders = useSelector(getMyOrderSelector);
  const [items, setItems] = useState<MyOrdersItemType>();

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
    <div>
      <TitlePage title="Фото" />
      {items && (
        <ul className={style.list}>
          {items.image.map((item, index) => (
            <li className={style.item} key={index}>
              <Link to={`/home-orders-info/${id}/photo/${index}`}>
                <ImageContainer x1x16 className={style.img} src={`${api_url}/${item.image_url}`} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PhotoOrders;
