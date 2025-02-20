import style from "./ProgressBar.module.scss";

interface ProgressBarProps {
  value_min: number;
  value_max: number;
  otrisovka_kv: number;
}

export function ProgressBar({
  value_min,
  value_max,
  otrisovka_kv,
}: ProgressBarProps) {
  if (otrisovka_kv < value_min) {
    return (
      <div className={style.progressBar}>
        <div className={style.progressBarFill} style={{ width: `${0}%` }}></div>
        <div className={style.infoKG}>{0} кг</div>
      </div>
    );
  }

  const progress = otrisovka_kv > value_max ? value_max : otrisovka_kv;
  const percentage = ((progress - value_min) / (value_max - value_min)) * 100;
  const displayValue = otrisovka_kv > value_max ? value_max : otrisovka_kv;

  return (
    <div className={style.progressBar}>
      <div
        className={style.progressBarFill}
        style={{ width: `${percentage}%` }}
      >
      </div>
      <div className={style.infoKG}>{displayValue}кг</div>
    </div>
  );
}
