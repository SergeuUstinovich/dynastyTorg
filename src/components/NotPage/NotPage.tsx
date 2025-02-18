import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./NotPage.module.scss";

function NotPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={style.boxRoute}>
      <h1 className={style.title}>Неизвестный маршрут!</h1>
      <p className={style.descr}>Страница не найдена, исправляем!</p>
    </div>
  );
}

export default NotPage;
