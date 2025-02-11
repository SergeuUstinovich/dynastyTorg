import { SvgProps } from "../../../types/SvgProps";

export function CheckedSvg({ className }: SvgProps) {
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
        d="M15.7137 5.71484L7.85658 13.572L4.28516 10.0006"
        stroke="#171D23"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
