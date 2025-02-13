import { Link } from "react-router";
import { ItemImgSwiper, TitlePage } from "../../components";
import { arrDelivery } from "./dataDelivery";
import style from "./ListDelivery.module.scss";

function ListDelivery() {
  return (
    <div className={style.boxDelivery}>
      <TitlePage title="Виды доставки" />
      <ul className={style.list}>
        {arrDelivery.map((item) => (
          <li className={style.item} key={item.id}>
            <Link className={style.link} to={`/home-delivery/${item.id}`}>
              <ItemImgSwiper disable src={item.img} descr={item.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListDelivery;
