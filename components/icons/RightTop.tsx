import React from "react";
import type { SVGProps } from "react";

export function EpTopRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="icon-xs text-button-secondary-icon"
      role="img"
      width="24"
      height="24"
    >
      <g id="arrow-up-right-outline-icon" stroke="#687076">
        <path
          id="Icon"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2px"
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke="#687076"
        ></path>
      </g>
    </svg>
  );
}
