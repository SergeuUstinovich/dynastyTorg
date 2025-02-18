import { useParams } from "react-router-dom";
import style from "./Services.module.scss";
import { useEffect, useState } from "react";
import {
  arrDeliveryType,
  servicesOrderArr,
  servicesOrderPackageArr,
} from "./servicesData";
import { Accordion } from "../../ui";
import ImageContainer from "../../utils/ImageContainer";

const ServicesOrder = () => {
  const [servicesArr, setServicesArr] = useState<arrDeliveryType>();
  const { id, category } = useParams();

  useEffect(() => {
    if (servicesOrderArr.find((item) => item.category === category)) {
      const obj = servicesOrderArr.find(
        (item) => item.id === id && item.category === category
      );
      setServicesArr(obj);
    } else {
      const obj = servicesOrderPackageArr.find(
        (item) => item.id === id && item.category === category
      );
      setServicesArr(obj);
    }
  }, [id]);

  return (
    <section className={style.servicesOrder}>
      <div className={style.servicesUpper}>
        <h1 className={style.servicesTitle}>{servicesArr?.title}</h1>
        <ImageContainer
          className={style.servicesImage}
          src={servicesArr ? servicesArr?.img : ""}
          alt={servicesArr?.title}
          x1x16={false}
        />
        <p className={style.servicesDescription}>{servicesArr?.description}</p>
      </div>
      <div className={style.servicesMiddle}>
        {servicesArr?.whatTransport?.map((element, index) => (
          <Accordion
            isLeft
            key={index}
            className={style.accordion}
            title={element.title}
          >
            <ul>
              {element.accordInner.map((item) => (
                <li className={style.accordItem} key={item.id}>
                  <h3 className={style.accordItemTitle}>
                    {`${item.id}. `}
                    {item.title}
                  </h3>
                  {item.price && (
                    <p className={style.infoDescr}>
                      <b className={style.infoPrice}>Цена: </b>
                      {item.price}
                    </p>
                  )}
                  {item.term && (
                    <p className={style.infoDescr}>
                      <b className={style.infoPrice}>Сроки доставки: </b>
                      {item.term}
                    </p>
                  )}

                  {item.descr.map((innerItem, innerIndex) => (
                    <p key={innerIndex} className={style.accordItemText}>
                      {innerItem.text}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default ServicesOrder;
