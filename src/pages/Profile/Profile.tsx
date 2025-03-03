import { useSelector } from "react-redux";
import { getMainSelector } from "../../providers/StoreProvider/selectors/getMainSelector";
import style from "./Profile.module.scss";
import { ContainerSwiper, ItemImgSwiper } from "../../components";
import { CustomSwiper } from "../../ui";
import { LoaderContent } from "../../ui/Loader/LoaderContent/LoaderContent";
import { Button } from "../../ui/Button";
import { useTelegram } from "../../providers/telegram/telegram";

const api_url = import.meta.env.VITE_API_BASE_URL;

function Profile() {
  const user = useSelector(getMainSelector);
  const {tg} = useTelegram()
  const configAchivments = {
    spaceBetween: 8,
    slidesPerView: user && user.achievement.length > 2 ? 2.4 : 2,
  };
  const handleLink = () => {
    tg.openLink('')
  }
  return (
    <div className={style.boxProfile}>
      <div className={style.boxSkidka}>
        {user && user.user.first_order ? (
          <h2 className={style.title}>-{user.my_rang.sale}%</h2>
        ) : (
          <h2 className={style.title}>-10%</h2>
        )}
        <p className={style.descr}>Ваша персональная скидка</p>
      </div>
      {user ? (
        <ContainerSwiper title="Достижение">
          <CustomSwiper config={configAchivments}>
            {user.achievement.map((item) => (
              <ItemImgSwiper
                key={item.id}
                src={`${api_url}${item.achievement.image.image_url}`}
                descr={item.achievement.name}
                disable={item.access}
                title={item.achievement.description}
                maxWidth
              />
            ))}
          </CustomSwiper>
        </ContainerSwiper>
      ) : (
        <LoaderContent />
      )}
      <div className={style.politic}>
        <Button className={style.politicBtn} onClick={handleLink}>Политика конфиденциальности</Button>
      </div>
    </div>
  );
}

export default Profile;
