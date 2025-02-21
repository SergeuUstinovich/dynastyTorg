import { Link } from "react-router-dom";
import style from "./ServicesList.module.scss";
import ImageContainer from "../../utils/ImageContainer";

interface IServicesData {
  id: string;
  text: string;
  img: string;
  category: string;
}

interface IServicesListProps {
  data: Array<IServicesData>;
  categoryParams: "active" | "package";
}

export const ServicesList = ({ data }: IServicesListProps) => {
  return (
    <ul className={style.listInfo}>
      {data.map((element) => (
        <li className={style.info} key={element.id}>
          <Link
            className={style.infoLink}
            to={`/services/${element.id}/${element.category}`}
            state={console.log({ category: element.category })}
          >
            <ImageContainer src={element.img} x1x16={false} />
            <span className={style.infoText}>{element.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
