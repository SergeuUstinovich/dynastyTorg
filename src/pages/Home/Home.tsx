import { ContainerSwiper, HomeOrders } from "../../components";
// import { CustomSwiper } from "../../ui";
import style from "./Home.module.scss";

function Home() {
//   const config = {
//     spaceBetween: 30,
//     slidesPerView: 3,
//   };
 
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
      <ContainerSwiper title="Виды доставки" link="">
        <div>свайпер</div>
      </ContainerSwiper>
      <ContainerSwiper title="Акции" link="">
      <div>свайпер</div>
        {/* <CustomSwiper config={config}>
        </CustomSwiper> */}
      </ContainerSwiper>
      <ContainerSwiper className={style.marg} title="Скидки" link="">
        <div>свайпер</div>
      </ContainerSwiper>
    </div>
  );
}

export default Home;
