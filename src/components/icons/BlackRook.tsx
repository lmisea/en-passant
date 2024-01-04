import type { SVGProps } from 'react'
const SvgBlackRook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} {...props}>
    <g
      style={{
        opacity: 1,
        fill: '#000',
        fillOpacity: 1,
        fillRule: 'evenodd',
        stroke: '#000',
        strokeWidth: 1.5,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 4,
        strokeDasharray: 'none',
        strokeOpacity: 1,
      }}
    >
      <path
        d="M9 39h27v-3H9zM12.5 32l1.5-2.5h17l1.5 2.5zM12 36v-4h21v4z"
        style={{
          strokeLinecap: 'butt',
        }}
        transform="translate(0 .3)"
      />
      <path
        d="M14 29.5v-13h17v13z"
        style={{
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
        }}
        transform="translate(0 .3)"
      />
      <path
        d="M14 16.5 11 14h23l-3 2.5zM11 14V9h4v2h5V9h5v2h5V9h4v5z"
        style={{
          strokeLinecap: 'butt',
        }}
        transform="translate(0 .3)"
      />
      <path
        d="M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23"
        style={{
          fill: 'none',
          stroke: '#fff',
          strokeWidth: 1,
          strokeLinejoin: 'miter',
        }}
        transform="translate(0 .3)"
      />
    </g>
  </svg>
)
export default SvgBlackRook
