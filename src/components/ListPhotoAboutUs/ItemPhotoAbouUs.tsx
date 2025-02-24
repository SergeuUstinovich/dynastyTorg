import { CustomSwiper, Modal } from "../../ui";
import { useNavigate, useParams } from "react-router";
import style from "./ListPhotoAboutUs.module.scss";
import ImageContainer from "../../utils/ImageContainer";
import { useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import { CrossSvg } from "../../assets/svg";
import { Button } from "../../ui/Button";
import { dataAbout } from "../../pages/AboutUs/dataAbout";

// const api_url = import.meta.env.VITE_API_BASE_URL;

function ItemPhotoAbouUs() {
  const { index } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNav = () => {
    navigate(`/aboutus-photo`);
  };

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
          {currentSlide + 1} из {dataAbout.photo.length}
        </p>
        <Button onClick={handleNav}>
          <CrossSvg className={style.svg} />
        </Button>
      </div>
      <div className={style.boxPhoto}>
        <CustomSwiper
          classNameSlide={style.slide}
          classNameSwiper={style.swiper}
          config={config}
        >
          {dataAbout.photo.map((item, value) => (
            <div className={style.boxImg} key={value}>
              <ImageContainer
                className={style.img}
                src={item.img}
                x1x16={false}
              />
            </div>
          ))}
        </CustomSwiper>
      </div>
    </Modal>
  );
}

export default ItemPhotoAbouUs;
