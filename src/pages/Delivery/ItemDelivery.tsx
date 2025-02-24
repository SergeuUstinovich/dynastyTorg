import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMainSelector } from "../../providers/StoreProvider/selectors/getMainSelector";
import { mergeDeliveries } from "../../helpers/mergeDeliveries";
import { arrDelivery, arrDeliveryType } from "./dataDelivery";
import { useParams } from "react-router-dom";
import ImageContainer from "../../utils/ImageContainer";
import style from "./ListDelivery.module.scss";
import { Accordion } from "../../ui";

function ItemDelivery() {
  const [deliveryArr, setDeliveryArr] = useState<arrDeliveryType>();
  const delivery = useSelector(getMainSelector);
  const { id } = useParams();
  useEffect(() => {
    if (delivery) {
      const newArr = mergeDeliveries(delivery.dostavki, arrDelivery);
      const obj = newArr.find((item) => item.id === id);
      setDeliveryArr(obj);
    }
  }, [delivery, id]);
  return (
    <div className={style.box}>
      {deliveryArr && (
        <>
          <div className={style.boxInfo}>
            <h2 className={style.titleInfo}>{deliveryArr.title}</h2>
            <div className={style.boxImg}>
              <ImageContainer
                className={style.imgInfo}
                src={deliveryArr.imgInfo}
                x1x16
              />
            </div>
            <p className={style.descrInfo}>{deliveryArr.description}</p>
          </div>
          <div className={style.boxAccor}>
            <Accordion isLeft title={deliveryArr.format.title}>
              <ul className={style.list}>
                {deliveryArr.format.deliveryFormat.map((item) => (
                  <li className={style.item} key={item.id}>
                    {item.type && (
                      <>
                        <h3 className={style.title}>
                          {item.id}. {item.type}
                        </h3>
                        <p className={style.descrType}>
                          -Цена:{" "}
                          <span className={style.spanType}>
                            от {item.price}$/кг
                          </span>
                        </p>
                        <p className={style.descrType}>
                          -Срок доставки:{" "}
                          <span className={style.spanType}>
                            {item.ot_day}-{item.do_day} дней
                          </span>
                        </p>
                        <p className={style.descr}>{item.descr}</p>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion title={"Почему мы?"}>
              <ul className={style.list}>
                {deliveryArr.WhyUs.map((item, index) => (
                  <li className={style.item} key={index}>
                    <h3 className={style.title}>
                      {index + 1}. {item.title}
                    </h3>
                    <p className={style.descr}>{item.descr}</p>
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion title={"Что мы перевозим?"}>
              <ul className={style.list}>
                {deliveryArr.whatTransport.map((item, index) => (
                  <li className={style.item} key={index}>
                    <h3 className={style.title}>
                      {index + 1}. {item.title}
                    </h3>
                    <p className={style.descr}>{item.descr}</p>
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion isLeft title={deliveryArr.benefits.title}>
              <ul className={style.list}>
                {deliveryArr.benefits.arr.map((item, index) => (
                  <li className={style.item} key={index}>
                    <h3 className={style.title}>
                      {index + 1}. {item.title}
                    </h3>
                    <p className={style.descr}>{item.descr}</p>
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>
        </>
      )}
    </div>
  );
}

export default ItemDelivery;
