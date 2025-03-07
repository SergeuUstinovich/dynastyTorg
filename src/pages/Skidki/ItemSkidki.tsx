import { useParams } from "react-router-dom";
import style from "./ListSkidki.module.scss";
import { useSelector } from "react-redux";
import { getMainSelector } from "../../providers/StoreProvider/selectors/getMainSelector";
import { useEffect, useState } from "react";
import { SkidkiType } from "../../types/MainType";
import ImageContainer from "../../utils/ImageContainer";
import { Button } from "../../ui/Button";
import { ContainerSwiper, ItemImgSwiper } from "../../components";
import { CustomSwiper } from "../../ui";
import { useTelegram } from "../../providers/telegram/telegram";

const api_url = import.meta.env.VITE_API_BASE_URL;

function ItemSkidki() {
  const { id } = useParams();
  const skidki = useSelector(getMainSelector);
  const [item, setItem] = useState<SkidkiType>();
  const {tg} = useTelegram();

  useEffect(() => {
    if (skidki) {
      const obj = skidki.skidki.find((item) => item.id === Number(id));
      setItem(obj);
    }
  }, [id, skidki]);

  const configSkidki = {
    spaceBetween: 8,
    slidesPerView: skidki && skidki.skidki.length > 2 ? 2.4 : 2,
  };

  const handleOrder = () => {
    tg.openTelegramLink('https://t.me/cargo_dinastiya')
  }

  return (
    <div className={style.boxItem}>
      {item && (
        <div className={style.boxInfo}>
          <p className={style.descr}>
            {item.rang.sale ? (
              <span className={style.span}>
                {`-${item.rang.sale}%`}{" "}
                <span className={style.spanDescr}>{item.text}</span>
              </span>
            ) : (
              item.text
            )}
          </p>
          <ImageContainer
            className={style.img}
            src={`${api_url}/${item.image}`}
            x1x16
          />
          <p className={style.descrItem}>{item.description}</p>
          <Button onClick={handleOrder} className={style.btnItem}>Оформить заказ</Button>
        </div>
      )}
      <ContainerSwiper
        className={style.marg}
        title="Скидки"
        link="/home-skidki"
      >
        <CustomSwiper config={configSkidki}>
          {skidki &&
            skidki.skidki.map((item) => (
              <ItemImgSwiper
                key={item.id}
                src={`${api_url}${item.image}`}
                descr={item.text}
                disable={item.active}
                title={item.rang.name}
                sale={item.rang.sale}
                link={`/home-skidki/${item.id}`}
              />
            ))}
        </CustomSwiper>
      </ContainerSwiper>
    </div>
  );
}

export default ItemSkidki;
