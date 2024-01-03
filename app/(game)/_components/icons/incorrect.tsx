import { SVGProps } from "react";

// majesticons:close-line
export function IncorrectIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5"
      ></path>
    </svg>
  );
}
