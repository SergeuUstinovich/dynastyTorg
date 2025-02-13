import { CloseLockSvg } from "../../assets/svg";
import ImageContainer from "../../utils/ImageContainer";
import style from "./ItemImgSwiper.module.scss";

interface ItemImgSwiperProps {
  src: string;
  descr: string;
  disable?: boolean;
  title?: string;
  sale?: number;
  maxWidth?: boolean;
}

export function ItemImgSwiper({
  src,
  descr,
  disable,
  title,
  sale,
  maxWidth,
}: ItemImgSwiperProps) {
  return (
    <div className={style.boxItem}>
      <div className={style.boxImg}>
        <ImageContainer className={style.img} src={src} x1x16 />
        {!disable && (
          <div className={style.disable}>
            <CloseLockSvg />
            <p
              style={maxWidth ? { width: "100px" } : {}}
              className={style.disDescr}
            >
              {title}
            </p>
          </div>
        )}
      </div>

      <p className={style.descr}>
        {sale ? (
          <span className={style.span}>
            {`-${sale}%`} <span className={style.spanDescr}>{descr}</span>
          </span>
        ) : (
          descr
        )}
      </p>
    </div>
  );
}
