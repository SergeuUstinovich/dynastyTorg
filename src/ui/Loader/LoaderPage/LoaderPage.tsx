import style from "./LoaderPage.module.scss";
import { classNames } from "../../../utils/classNames";

interface LoaderPageProps {
  className?: string
}

export const LoaderPage = ({className = ''}:LoaderPageProps) => (
  <div className={classNames(style.box, {}, [className])}>
    <span className={style.loader}></span>
    <p className={style.descr}>Загрузка...</p>
  </div>
);
