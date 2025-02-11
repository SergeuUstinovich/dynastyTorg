import { Link, useLocation } from "react-router-dom";
import style from "./Footer.module.scss";
import { dataNav } from "./dataNav";

export function Footer() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return (
        location.pathname === path || location.pathname.startsWith("/home")
      );
    } else {
      return location.pathname.startsWith(path);
    }
  };

  return (
    <div className={style.box}>
      <ul className={style.list}>
        {dataNav.map((item) => (
          <li
            className={`${style.item} ${
              isActive(item.path) ? style.active : ""
            }`}
            key={item.id}
          >
            <Link className={style.link} to={item.path}>
              <div className={style.svgBox}>{item.svg}</div>
              <h3
                className={`${style.title} ${
                  isActive(item.path) ? style.active : ""
                }`}
              >
                {item.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
