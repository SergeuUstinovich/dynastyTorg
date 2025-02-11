import { Link } from "react-router";
import style from "./HomeOrders.module.scss";
import { Button } from "../../ui/Button";
import { ArrowSvg } from "../../assets/svg";

interface MyOrdersProps {
  title: string;
  descr: string;
  link: string;
}

export function HomeOrders({ title, descr, link }: MyOrdersProps) {
  return (
    <div className={style.boxOrders}>
      <Link className={style.link} to={link}>
        <div className={style.info}>
          <h2 className={style.title}>{title}</h2>
          <p className={style.descr}>{descr}</p>
        </div>
        <Button className={style.btn}>
          <ArrowSvg />
        </Button>
      </Link>
    </div>
  );
}
