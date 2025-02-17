import { classNames } from "../../../utils/classNames";
import style from "./LoaderButton.module.scss";

interface LoaderButtonProps {
  className?: string;
}

export const LoaderButton = ({ className = "" }: LoaderButtonProps) => (
  <span className={classNames(style.loader, {}, [className])}></span>
);
