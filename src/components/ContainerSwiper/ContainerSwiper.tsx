import { ReactNode } from "react";
import { Link } from "react-router";
import style from './ContainerSwiper.module.scss'

interface ContainerSwiperProps {
  title: string;
  link?: string;
  textLink?: string
  children: ReactNode;
  className?: string;
}

export function ContainerSwiper({
  title,
  link,
  children,
  className,
  textLink
}: ContainerSwiperProps) {
  return (
    <div className={`${style.boxSwiper} ${className}`}>
      <div className={style.boxTitle}>
        <h3 className={style.title}>{title}</h3>
        {link && <Link className={style.link} to={link}>{textLink ? textLink : 'Смотреть все'}</Link>}
      </div>
      <div>{children}</div>
    </div>
  );
}
