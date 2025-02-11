import style from "./TitlePage.module.scss";

interface TitlePageProps {
  title: string;
  descr?: string;
}

export function TitlePage({ title, descr }: TitlePageProps) {
  return (
    <div className={style.boxOrders}>
        <h2 className={style.title}>{title}</h2>
        {descr && (
            <p className={style.descr}>{descr}</p>
        )}
    </div>
  );
}
