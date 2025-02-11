import { SvgProps } from "../../../types/SvgProps";

export function ArrowUpAccordSvg({ className }: SvgProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13L10 7L16 13"
        stroke="#99A1AB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
