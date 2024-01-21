import { SVGProps } from 'react';

// majesticons:arrow-right-line
export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>Next round</title>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 12l-6-6m6 6l-6 6m6-6H5"
      />
    </svg>
  );
}
