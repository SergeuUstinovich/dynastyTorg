import { Link } from "react-router";
import { TitlePage } from "..";
import { dataAbout } from "../../pages/AboutUs/dataAbout";
import ImageContainer from "../../utils/ImageContainer";
import style from "./ListPhotoAboutUs.module.scss";

// const api_url = import.meta.env.VITE_API_BASE_URL;

export function ListPhotoAboutUs() {
  return (
    <div>
      <TitlePage title="Фото" />
      {dataAbout && (
        <ul className={style.list}>
          {dataAbout.photo.map((item, index) => (
            <li className={style.item} key={index}>
              <Link to={`/aboutus-photo/${index}`}>
                <ImageContainer
                  x1x16
                  className={style.img}
                  src={item.img}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
