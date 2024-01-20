import { SVGProps } from 'react';

// majesticons:arrow-left-line
export function ArrowLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>Previous round</title>
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m5 12l6-6m-6 6l6 6m-6-6h14"
      />
    </svg>
  );
}
