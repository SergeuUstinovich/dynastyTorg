import { MouseEventHandler } from "react";
import style from "./SwitchOption.module.scss";
import { classNames } from "../../utils/classNames";

interface SwitchAutorizOptionProps {
  isActive: boolean;
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export function SwitchOption({
  isActive,
  title,
  onClick,
  className = "",
}: SwitchAutorizOptionProps) {
  return (
    <button
      data-active={isActive}
      className={classNames(style.switch_option, {}, [className])}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
