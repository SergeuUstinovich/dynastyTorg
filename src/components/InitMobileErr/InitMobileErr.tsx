import QRCode from "react-qr-code";
import style from "./InitMobileErr.module.scss";

function InitMobileErr() {
  return (
    <div className={style.box}>
      <div className={style.boxQr}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={"https://t.me/dinastiyatorgbot"}
          viewBox={`0 0 256 256`}
        />
      </div>
      <h1 className={style.title}>Перейдите в Telegram с вашего устройства</h1>
      <p className={style.descr}>Отсканируйте QR-код или откройте Telegram на вашем смартфоне.</p>
    </div>
  );
}

export default InitMobileErr;
