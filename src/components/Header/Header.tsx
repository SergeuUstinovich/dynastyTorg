import { useSelector } from "react-redux";
import { ProfileNavSvg, ServicesSvg, SupportSvg } from "../../assets/svg";
import { displayName } from "../../helpers/truncateText";
import { Button } from "../../ui/Button";
import style from "./Header.module.scss";
import { getMainSelector } from "../../providers/StoreProvider/selectors/getMainSelector";

const api_url = import.meta.env.VITE_API_BASE_URL

export function Header() {
  const user = useSelector(getMainSelector);
  return (
    <div className={style.header}>
      <div className={style.infoUserBox}>
        <div className={style.svgImgBox}>
          {user?.user.photo_url ? (
            <img className={style.imgSvg} src={user?.user.photo_url} alt="" />
          ) : (
            <ProfileNavSvg className={style.svg} />
          )}
        </div>
        <div className={style.infoUser}>
          {user && (
            <h2 className={style.title}>
              {displayName(20, user.user.tg_first_name, user.user.tg_last_name, user.user.tg_username)}
            </h2>
          )}
          {user && (
            <p className={style.descr}>
            <img className={style.imgRang} src={`${api_url}/${user.my_rang.sigma.image_url}`} alt="" />
            <span className={style.span}>{user.my_rang.name}</span>
          </p>
          )}
          
        </div>
      </div>
      <div className={style.countBox}>
        <div className={style.count}>
          <ServicesSvg className={style.countSvg} />
          <span className={style.value}>{user?.user.money}</span>
        </div>
        <Button className={style.btn}>
          <SupportSvg />
        </Button>
      </div>
    </div>
  );
}
