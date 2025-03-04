import { useSelector } from "react-redux";
import {
  ContainerSwiper,
  HomeOrders,
  ItemImgSwiper,
  SocialLink,
} from "../../components";
import { CustomSwiper } from "../../ui";
import img from "../../assets/png/reviews.png";
import { getMainSelector } from "../../providers/StoreProvider/selectors/getMainSelector";
import { arrDelivery } from "../Delivery/dataDelivery";
import { LoaderContent } from "../../ui/Loader/LoaderContent/LoaderContent";
import { Button } from "../../ui/Button";

const api_url = import.meta.env.VITE_API_BASE_URL;

function Home() {
  const arr = useSelector(getMainSelector);

  const configDostavka = {
    spaceBetween: 8,
    slidesPerView: 2.4,
  };

  const configActions = {
    spaceBetween: 8,
    slidesPerView: arr && arr.actions.length > 2 ? 2.4 : 2,
  };

  const configSkidki = {
    spaceBetween: 8,
    slidesPerView: arr && arr.skidki.length > 2 ? 2.4 : 2,
  };

  return (
    <div>
      <HomeOrders
        title="Мои Заказы"
        descr="Здесь будут храниться все ваши заказы."
        link="/home-orders"
      />
      <HomeOrders
        title="Калькулятор доставки"
        descr="Введите данные о грузе и его направление, чтобы рассчитать итоговую стоимость."
        link="/home-calculate"
      />
      <ContainerSwiper title="Виды доставки" link="/home-delivery">
        <CustomSwiper config={configDostavka}>
          {arrDelivery &&
            arrDelivery.map((item) => (
              <ItemImgSwiper
                key={item.id}
                src={item.img}
                descr={item.title}
                disable
              />
            ))}
        </CustomSwiper>
      </ContainerSwiper>
      {arr && arr.actions.length > 0 ? (
        <ContainerSwiper title="Акции" link="/home-action">
          <CustomSwiper config={configActions}>
            {arr.actions.map((item) => (
              <ItemImgSwiper
                key={item.id}
                src={`${api_url}${item.image.image_url}`}
                descr={item.text}
                disable={item.activate}
              />
            ))}
          </CustomSwiper>
        </ContainerSwiper>
      ) : (
        <LoaderContent />
      )}
      {arr && arr.skidki.length > 0 ? (
        <ContainerSwiper title="Скидки" link="/home-skidki">
          <CustomSwiper config={configSkidki}>
            {arr.skidki.map((item) => (
              <ItemImgSwiper
                key={item.id}
                src={`${api_url}${item.image}`}
                descr={item.text}
                disable={item.active}
                title={item.rang.name}
                sale={item.rang.sale}
              />
            ))}
          </CustomSwiper>
        </ContainerSwiper>
      ) : (
        <LoaderContent />
      )}
      <ContainerSwiper title="Наши соц. сети">
        <SocialLink />
      </ContainerSwiper>
      <Button style={{width: '100%', display: 'flex', padding: '0'}}>
        <ContainerSwiper title="Наши соц. сети" link="/" textLink="Перейти">
          <img style={{ width: "100%" }} src={img} alt="" />
        </ContainerSwiper>
      </Button>
    </div>
  );
}

export default Home;
