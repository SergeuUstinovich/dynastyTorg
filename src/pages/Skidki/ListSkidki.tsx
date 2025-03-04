import { useSelector } from "react-redux";
import { ItemImgSwiper, TitlePage } from "../../components";
import { getMainSelector } from "../../providers/StoreProvider/selectors/getMainSelector";
import { Link } from "react-router";
import style from "./ListSkidki.module.scss";
import { Button } from "../../ui/Button";
import toast from "react-hot-toast";

const api_url = import.meta.env.VITE_API_BASE_URL;

function ListSkidki() {
  const skidki = useSelector(getMainSelector);

  const handleBtn = (isActive: boolean) => {
    if (!isActive) {
      toast.error("Нужный уровень не достигнут!");
    }
  };

  return (
    <div className={style.boxList}>
      <TitlePage title="Скидки" />
      <ul className={style.list}>
        {skidki &&
          skidki.skidki.map((item) => (
            <Button
              key={item.id}
              onClick={() => handleBtn(item.active)}
              className={style.btn}
            >
              {!item.active ? (
                <ItemImgSwiper
                  src={`${api_url}${item.image}`}
                  descr={item.text}
                  disable={item.active}
                  title={item.rang.name}
                  sale={item.rang.sale}
                />
              ) : (
                <Link className={style.link} to={`/home-skidki/${item.id}`}>
                  <ItemImgSwiper
                    src={`${api_url}/${item.image}`}
                    descr={item.text}
                    disable={item.active}
                    title={item.rang.name}
                    sale={item.rang.sale}
                  />
                </Link>
              )}
            </Button>
          ))}
      </ul>
    </div>
  );
}

export default ListSkidki;
