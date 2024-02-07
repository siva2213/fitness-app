import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={130}
    height={130}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.05}
      d="M130 65c0 35.899-29.101 65-65 65-35.898 0-65-29.101-65-65C0 29.102 29.102 0 65 0c35.899 0 65 29.102 65 65ZM12.91 65c0 28.769 23.321 52.09 52.09 52.09 28.769 0 52.09-23.322 52.09-52.09 0-28.769-23.322-52.09-52.09-52.09-28.769 0-52.09 23.321-52.09 52.09Z"
    />
  </svg>
)
export default SvgComponent
