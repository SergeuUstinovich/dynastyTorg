import { CustomSwiper, Modal } from "../../ui";
import { useNavigate, useParams } from "react-router";
import style from "./PhotoOrders.module.scss";
import ImageContainer from "../../utils/ImageContainer";
import { useEffect, useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import { CrossSvg } from "../../assets/svg";
import { Button } from "../../ui/Button";
import { useSelector } from "react-redux";
import { getMyOrderSelector } from "../../providers/StoreProvider/selectors/getMyOrderSelector";
import { MyOrdersItemType } from "../../types/MyOrdersType";


const api_url = import.meta.env.VITE_API_BASE_URL;

function PhotoIndex() {
  const { index, id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate()

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

  const handleNav = () => {
    navigate(`/home-orders-info/${id}/photo`)
  }

  const config = {
    spaceBetween: 0,
    slidesPerView: 1,
    initialSlide: index ? Number(index) : 0,
    onSlideChange: (swiper: SwiperClass) => setCurrentSlide(swiper.activeIndex),
  };

  return (
    <Modal isOpen>
      <div className={style.boxCount}>
        <p className={style.descrNumber}>
          {currentSlide + 1} из {items?.image.length}
        </p>
        <Button onClick={handleNav}>
          <CrossSvg className={style.svg} />
        </Button>
      </div>
      <div className={style.boxPhoto}>
        <CustomSwiper classNameSlide={style.slide} classNameSwiper={style.swiper} config={config}>
          {items?.image.map((item, value) => (
            <div className={style.boxImg} key={value}>
              <ImageContainer className={style.img} src={`${api_url}/${item.image_url}`} x1x16={false} />
            </div>
          ))}
        </CustomSwiper>
      </div>
    </Modal>
  );
}

export default PhotoIndex;
