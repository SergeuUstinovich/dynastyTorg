import { useSelector } from "react-redux";
import { ProfileNavSvg, ServicesSvg, SupportSvg } from "../../assets/svg";
import { displayName } from "../../helpers/truncateText";
import { Button } from "../../ui/Button";
import style from "./Header.module.scss";
import { getMainSelector } from "../../providers/StoreProvider/selectors/getMainSelector";
import { Link } from "react-router";
import { useTelegram } from "../../providers/telegram/telegram";
import { LoaderButton } from "../../ui/Loader/LoaderButton";
import { useState } from "react";
import { SlidingPanel } from "../../ui/SlidingPanel";
import imgCoinInfo from "../../assets/png/infoCoin.png";

const api_url = import.meta.env.VITE_API_BASE_URL;

export function Header() {
  const user = useSelector(getMainSelector);
  const { tg } = useTelegram();
  const [isInfo, setIsInfo] = useState(false);

  const handleInfoOpen = () => {
    setIsInfo(true);
  };

  const handleInfoClose = () => {
    setIsInfo(false);
  };

  const handleSupport = () => {
    tg.openTelegramLink("https://t.me/cargo_dinastiya");
  };

  return (
    <>
      <div className={style.header}>
        <Link to={"/home-profile"} className={style.infoUserBox}>
          <div className={style.svgImgBox}>
            {user?.user.photo_url ? (
              <img className={style.imgSvg} src={user?.user.photo_url} alt="" />
            ) : (
              <ProfileNavSvg className={style.svg} />
            )}
          </div>
          <div className={style.infoUser}>
            {user ? (
              <h2 className={style.title}>
                {displayName(
                  20,
                  user.user.tg_first_name,
                  user.user.tg_last_name,
                  user.user.tg_username
                )}
              </h2>
            ) : (
              <h2 className={style.skeletonTitle} />
            )}
            {user ? (
              <p className={style.descr}>
                <img
                  className={style.imgRang}
                  src={`${api_url}/${user.my_rang.sigma.image_url}`}
                  alt=""
                />
                <span className={style.span}>{user.my_rang.name}</span>
              </p>
            ) : (
              <p className={style.descrSkeleton} />
            )}
          </div>
        </Link>
        <div className={style.countBox}>
          <Button onClick={handleInfoOpen} className={style.count}>
            <ServicesSvg className={style.countSvg} />
            <span className={style.value}>
              {user ? (
                user.user.money
              ) : (
                <LoaderButton className={style.skeletonLoad} />
              )}
            </span>
          </Button>
          <Button onClick={handleSupport} className={style.btn}>
            <SupportSvg />
          </Button>
        </div>
      </div>
      <SlidingPanel
        onClose={handleInfoClose}
        initialHeight="80%"
        fullHeight="80%"
        isOpen={isInfo}
      >
        <div className={style.boxInfo}>
          <img className={style.imgInfo} src={imgCoinInfo} alt="" />
          <h2 className={style.titleInfo}>
            Монеты в приложении – ваш бонус за активность!
          </h2>
          <p className={style.descrInfo}>1 монета = 1 кг груза.</p>
          <div className={style.boxTitle}>
            <h3 className={style.titleBoxInfo}>Как получить монеты?</h3>
            <p className={style.descrBoxInfo}>
              1. Выолняйте задания{" "}
              <span className={style.spanInfo}>
                в разделе «Задания» и зарабатывайте бонусы.
              </span>
            </p>
            <p className={style.descrBoxInfo}>
              2. Оформляйте перевозки{" "}
              <span className={style.spanInfo}>
                {" "}
                – за каждый килограмм груза вы получаете 1 монету.
              </span>
            </p>
          </div>
          <p className={style.descrCoinInfo}>
            Накопленные монеты можно обменять на{" "}
            <span style={{ color: "#3461e0" }}>скидки</span> и специальные{" "}
            <span style={{ color: "#3461e0" }}>акции</span>, которые
            периодически появляются в приложении. Следите за обновлениями!
          </p>
          <Button onClick={handleInfoClose} className={style.btnInfo}>
            Ок
          </Button>
        </div>
      </SlidingPanel>
    </>
  );
}
