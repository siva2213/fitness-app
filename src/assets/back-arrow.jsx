import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={68}
    height={68}
    fill="none"
    {...props}
  >
    <g filter="url(#backarrowa)" shapeRendering="crispEdges">
      <rect
        width={60}
        height={60}
        x={4}
        fill="#000"
        fillOpacity={0.05}
        rx={30}
      />
      <rect width={59} height={59} x={4.5} y={0.5} stroke="#000" rx={29.5} />
    </g>
    <defs>
      <filter
        id="backarrowa"
        width={68}
        height={68}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_45_219" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_45_219"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default SvgComponent
