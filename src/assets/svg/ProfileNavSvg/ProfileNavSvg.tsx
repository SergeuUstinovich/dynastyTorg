import { SvgProps } from "../../../types/SvgProps";

export function ProfileNavSvg({ className }: SvgProps) {
  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1 10C14.3091 10 16.1 8.20914 16.1 6C16.1 3.79086 14.3091 2 12.1 2C9.89084 2 8.09998 3.79086 8.09998 6C8.09998 8.20914 9.89084 10 12.1 10Z"
        fill="#A5A7A7"
      />
      <path
        d="M20.1 17.5C20.1 19.985 20.1 22 12.1 22C4.09998 22 4.09998 19.985 4.09998 17.5C4.09998 15.015 7.68198 13 12.1 13C16.518 13 20.1 15.015 20.1 17.5Z"
        fill="#A5A7A7"
      />
    </svg>
  );
}
