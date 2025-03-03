import { useTelegram } from "../../providers/telegram/telegram";
import style from "./SocialLink.module.scss";
import imgChat from "../../assets/svg/chat.svg";
import imgtelegram from "../../assets/svg/telegram.svg";
import imgwebsite from "../../assets/svg/website.svg";
import imgtiktok from "../../assets/svg/tiktok.svg";
import imgwhatsapp from "../../assets/svg/whatsapp.svg";
import { Button } from "../../ui/Button";

const arrLink = [
  { id: 1, link: "", title: "Чат поставщиков", svg: imgChat },
  { id: 2, link: "", title: "Telegram канал", svg: imgtelegram },
  { id: 3, link: "", title: "Наш сайт", svg: imgwebsite },
  { id: 4, link: "", title: "TikTok аккаунт", svg: imgtiktok },
  { id: 5, link: "", title: "WhatsApp aккаунт", svg: imgwhatsapp },
];

export function SocialLink() {
  const { tg } = useTelegram();

  const handleLink = (link: string) => {
    if (link.startsWith("https://t.me/")) {
      tg.openTelegramLink(link);
    } else {
      tg.openLink(link);
    }
  };

  return (
    <div className={style.boxLink}>
      <ul className={style.list}>
        {arrLink.map((item) => (
          <li className={style.item} key={item.id}>
            <Button className={style.btn} onClick={() => handleLink(item.link)}>
              <img className={style.img} src={item.svg} alt="" />
              <p className={style.descr}>{item.title}</p>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
