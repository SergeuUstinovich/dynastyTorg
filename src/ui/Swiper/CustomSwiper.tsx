import { Children, ReactNode } from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import 'swiper/scss'


interface CustomSwiperProps {
    children: ReactNode;
    config: SwiperProps;
    classNameSwiper?: string;
    classNameSlide?: string;
}

export function CustomSwiper({ children, config, classNameSwiper, classNameSlide }: CustomSwiperProps) {
  return (
    <Swiper className={classNameSwiper} {...config}>
      {Children.map(children, (child, index) => (
        <SwiperSlide className={classNameSlide} key={index}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

