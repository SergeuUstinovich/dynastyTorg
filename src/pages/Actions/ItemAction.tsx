import { useParams } from "react-router-dom";
import style from "./ListAction.module.scss";
import { useSelector } from "react-redux";
import { getMainSelector } from "../../providers/StoreProvider/selectors/getMainSelector";
import { useEffect, useState } from "react";
import { ActionsType } from "../../types/MainType";
import ImageContainer from "../../utils/ImageContainer";
import { Button } from "../../ui/Button";
import { ContainerSwiper, ItemImgSwiper } from "../../components";
import { CustomSwiper } from "../../ui";

const api_url = import.meta.env.VITE_API_BASE_URL;

function ItemAction() {
  const { id } = useParams();
  const action = useSelector(getMainSelector);
  const [item, setItem] = useState<ActionsType>();

  useEffect(() => {
    if (action) {
      const obj = action.actions.find((item) => item.id === Number(id));
      setItem(obj);
    }
  }, [id, action]);

  const configActions = {
    spaceBetween: 8,
    slidesPerView: action && action.actions.length > 2 ? 2.4 : 2,
  };

  return (
    <div className={style.boxItem}>
      {item && (
        <div className={style.boxInfo}>
          <p className={style.descr}>{item.text}</p>
          <ImageContainer
            className={style.img}
            src={`${api_url}/${item.image.image_url}`}
            x1x16
          />
          <p className={style.descrItem}>{item.description}</p>
          <Button className={style.btnItem}>Оформить заказ</Button>
        </div>
      )}
      <ContainerSwiper title="Акции" link="/home-action">
        <CustomSwiper config={configActions}>
          {action &&
            action.actions.map((item) => (
              <ItemImgSwiper
                key={item.id}
                src={`${api_url}${item.image.image_url}`}
                descr={item.text}
                disable
              />
            ))}
        </CustomSwiper>
      </ContainerSwiper>
    </div>
  );
}

export default ItemAction;
