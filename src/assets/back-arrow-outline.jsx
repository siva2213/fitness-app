import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M9.615 15 5 10l4.615-5m-3.974 5H15"
    />
  </svg>
)
export default SvgComponent
