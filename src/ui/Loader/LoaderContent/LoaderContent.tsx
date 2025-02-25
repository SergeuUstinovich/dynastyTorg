import style from "./LoaderContent.module.scss";
import { classNames } from "../../../utils/classNames";

interface LoaderContentProps {
  className?: string
  isBg?: boolean
}

export const LoaderContent = ({className = '', isBg}:LoaderContentProps) => (
  <div style={isBg ? {backgroundColor: 'transparent'} : {}} className={classNames(style.box, {}, [className])}>
    <span className={style.loader}></span>
  </div>
);
