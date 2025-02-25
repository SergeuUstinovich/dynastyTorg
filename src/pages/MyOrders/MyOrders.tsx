import { useEffect, useState } from "react";
import style from "./MyOrders.module.scss";
import { ListOrders, SwitchOption } from "../../components";
import { Button } from "../../ui/Button";
import { RefreshSvg } from "../../assets/svg/RefreshSvg/RefreshSvg";
import { useSelector } from "react-redux";
import { getMyOrderSelector } from "../../providers/StoreProvider/selectors/getMyOrderSelector";
import { queryClient } from "../../api/queryClient";
import { LoaderContent } from "../../ui/Loader/LoaderContent/LoaderContent";

type FilterType = "active" | "history";

function MyOrders() {
  const [filterType, setFilterType] = useState<FilterType>("active");
  const allOrders = useSelector(getMyOrderSelector);
  const [time, setTime] = useState(10);
  const [isActive, setIsActive] = useState(false);

  const handleRefetch = () => {
    const endTime = new Date().getTime() + 10000;
    localStorage.setItem("timerEndTime", endTime.toString());
    setIsActive(true);
    queryClient.invalidateQueries({ queryKey: ["myOrder"] });
  };

  useEffect(() => {
    const savedEndTime = localStorage.getItem("timerEndTime");
    if (savedEndTime) {
      const currentTime = new Date().getTime();
      const endTime = parseInt(savedEndTime, 10);
      const remainingTime = Math.max((endTime - currentTime) / 1000, 0);
      if (remainingTime > 0) {
        setTime(Math.floor(remainingTime));
        setIsActive(true);
      } else {
        setTime(10);
        setIsActive(false);
        localStorage.removeItem("timerEndTime");
      }
    }
  }, []);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        if (time > 0) {
          setTime((item) => item - 1);
        } else {
          setIsActive(false);
          setTime(10);
          localStorage.removeItem("timerTime");
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isActive, time]);

  return (
    <div className={style.boxOrders}>
      <div className={style.titleBox}>
        <div className={style.infoTitle}>
          <h2 className={style.title}>Мои заказы</h2>
          <p className={style.descr}>Здесь будут храниться все ваши заказы.</p>
        </div>
        <div className={style.boxTimer}>
          {isActive && <span className={style.timer}>{time}c</span>}
          <Button
            isDisabled={isActive}
            onClick={handleRefetch}
            className={style.btn}
          >
            <RefreshSvg />
          </Button>
        </div>
      </div>
      <div className={style.switcher}>
        <SwitchOption
          isActive={filterType === "active"}
          onClick={() => setFilterType("active")}
          className={style.category}
          title="Активные"
        />

        <SwitchOption
          isActive={filterType === "history"}
          onClick={() => setFilterType("history")}
          className={style.investments}
          title="История"
        />
      </div>
      {allOrders ? (
        <>
          {filterType === "active"
            ? allOrders && <ListOrders arr={allOrders.active_order} />
            : allOrders && <ListOrders arr={allOrders.completed_order} />}
        </>
      ) : (
        <LoaderContent />
      )}
    </div>
  );
}

export default MyOrders;
