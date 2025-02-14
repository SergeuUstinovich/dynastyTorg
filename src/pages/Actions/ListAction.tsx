import { useSelector } from "react-redux";
import { ItemImgSwiper, TitlePage } from "../../components";
import { getMainSelector } from "../../providers/StoreProvider/selectors/getMainSelector";
import { Link } from "react-router";
import style from "./ListAction.module.scss";
import { Button } from "../../ui/Button";
import toast from "react-hot-toast";

const api_url = import.meta.env.VITE_API_BASE_URL;

function ListAction() {
  const action = useSelector(getMainSelector);
  const handleBtn = (isActive: boolean) => {
    if (!isActive) {
      toast.error("Акция не доступна");
    }
  };
  return (
    <div className={style.boxList}>
      <TitlePage title="Акции" />
      <ul className={style.list}>
        {action &&
          action.actions.map((item) => (
            <Button
              onClick={() => handleBtn(item.activate)}
              key={item.id}
              className={style.btn}
            >
              {!item.activate ? (
                <ItemImgSwiper
                  src={`${api_url}${item.image.image_url}`}
                  descr={item.text}
                  disable={item.activate}
                />
              ) : (
                <Link className={style.link} to={`/home-action/${item.id}`}>
                  <ItemImgSwiper
                    src={`${api_url}${item.image.image_url}`}
                    descr={item.text}
                    disable={item.activate}
                  />
                </Link>
              )}
            </Button>
          ))}
      </ul>
    </div>
  );
}

export default ListAction;
