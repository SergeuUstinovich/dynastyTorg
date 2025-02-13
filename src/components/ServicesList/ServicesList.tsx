import { Link } from "react-router-dom";
import style from "./ServicesList.module.scss";
import ImageContainer from "../../utils/ImageContainer";

interface IServicesData {
  id: number;
  text: string;
  img: string;
}

interface IServicesListProps {
  data: Array<IServicesData>;
}

export const ServicesList = ({ data }: IServicesListProps) => {
  return (
    <ul className={style.listInfo}>
      {data.map((element) => (
        <li className={style.info} key={element.id}>
          <Link className={style.infoLink} to={"123"}>
            <ImageContainer src={element.img} x1x16 />
            <span className={style.infoText}>{element.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
